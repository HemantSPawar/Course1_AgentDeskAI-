/* global process */
import express from 'express'
import dotenv from 'dotenv'
import fs from 'node:fs'
import path from 'node:path'

dotenv.config()

const app = express()
const port = Number(process.env.WEBHOOK_PORT || 8787)
const cashfreeApiVersion = process.env.CASHFREE_API_VERSION || '2023-08-01'
const cashfreeBaseUrl =
  process.env.CASHFREE_BASE_URL ||
  (process.env.CASHFREE_ENV === 'production'
    ? 'https://api.cashfree.com'
    : 'https://sandbox.cashfree.com')
const successRedirectUrl =
  process.env.VITE_SUCCESS_REDIRECT_URL ||
  process.env.SUCCESS_REDIRECT_URL ||
  'https://drive.google.com/drive/folders/1zcf0Cj9mbL1GPXC720gC6jxJgP6kWa2A?usp=sharing'

app.use(express.json({ limit: '1mb' }))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  return next()
})

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'cashfree-webhook' })
})

app.post('/api/create-payment-link', async (req, res) => {
  try {
    const appId = process.env.CASHFREE_APP_ID
    const secretKey = process.env.CASHFREE_SECRET_KEY
    if (!appId || !secretKey || appId.startsWith('replace_')) {
      return res.status(500).json({ ok: false, error: 'Cashfree credentials are missing in .env' })
    }

    const { name, email, phone } = req.body || {}
    const amount = Number(req.body?.amount ?? 0.1)

    if (!name || !phone) {
      return res.status(400).json({ ok: false, error: 'Name and phone are required' })
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({ ok: false, error: 'Amount must be a positive number' })
    }

    const linkId = `agentdesk_${Date.now()}`
    const payload = {
      link_id: linkId,
      link_amount: amount,
      link_currency: 'INR',
      link_purpose: 'AgentDesk AI Course Access',
      customer_details: {
        customer_name: String(name),
        customer_phone: String(phone),
        customer_email: email ? String(email) : undefined,
      },
      link_notify: {
        send_sms: true,
        send_email: Boolean(email),
      },
      link_meta: {
        return_url: successRedirectUrl,
      },
    }

    const cfResponse = await fetch(`${cashfreeBaseUrl}/pg/links`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': cashfreeApiVersion,
        'x-client-id': appId,
        'x-client-secret': secretKey,
      },
      body: JSON.stringify(payload),
    })

    const data = await cfResponse.json()
    if (!cfResponse.ok) {
      return res.status(cfResponse.status).json({
        ok: false,
        error: data?.message || 'Failed to create payment link',
        details: data,
      })
    }

    return res.json({
      ok: true,
      link_id: data.link_id,
      link_url: data.link_url,
      link_status: data.link_status,
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Unexpected server error while creating payment link',
      details: String(error),
    })
  }
})

app.post('/api/cashfree/webhook', (req, res) => {
  const signature = req.header('x-webhook-signature') || ''
  const timestamp = req.header('x-webhook-timestamp') || ''
  const event = req.body || {}

  const logDir = path.resolve(process.cwd(), 'server', 'logs')
  fs.mkdirSync(logDir, { recursive: true })

  const payload = {
    received_at: new Date().toISOString(),
    signature,
    timestamp,
    event,
  }

  fs.appendFileSync(path.join(logDir, 'cashfree-webhooks.ndjson'), `${JSON.stringify(payload)}\n`, 'utf8')

  // TODO: Validate signature with CASHFREE_SECRET_KEY before processing in production.
  res.status(200).json({ ok: true })
})

app.listen(port, () => {
  console.log(`Cashfree mode: ${process.env.CASHFREE_ENV || 'sandbox'} | base: ${cashfreeBaseUrl}`)
  console.log(`Cashfree webhook server listening on http://localhost:${port}`)
})
