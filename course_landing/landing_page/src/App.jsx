import { useEffect } from 'react'
import './App.css'

const paymentLink = import.meta.env.VITE_PAYMENT_FORM_URL || 'https://payments.cashfree.com/forms/agentdeskai'
const successRedirectUrl = import.meta.env.VITE_SUCCESS_REDIRECT_URL || 'https://drive.google.com/drive/folders/1zcf0Cj9mbL1GPXC720gC6jxJgP6kWa2A?usp=sharing'

const pageMarkup = `<nav class="navbar navbar-expand-lg sticky-top nav-shell">
    <div class="container container-max py-2">
      <a class="navbar-brand d-flex align-items-center gap-3 text-white" href="#top" aria-label="Vector AI Academy">
        <span class="logo-mark"><i class="bi bi-cpu-fill"></i></span>
        <span>
          <span class="d-block fw-black fw-bold lh-1">Vector AI Academy</span>
          <small class="text-muted-soft">Practical AI Capstone Courses</small>
        </span>
      </a>
      <div class="ms-auto d-flex align-items-center gap-2">
        <a href="#curriculum" class="d-none d-lg-inline-block small text-muted-soft px-2">Curriculum</a>
        <a href="#bonus" class="d-none d-lg-inline-block small text-muted-soft px-2">Bonus</a>
        <a href="#access-now" class="d-none d-lg-inline-block small text-muted-soft px-2">Access Process</a>
        <a href="#faq" class="d-none d-lg-inline-block small text-muted-soft px-2">FAQ</a>
        <a href="${paymentLink}" class="btn btn-brand rounded-pill px-4 py-2 fw-bold" target="_blank" rel="noopener">
          Enroll ₹0.1 <i class="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  </nav>

  <main id="top">
    <section class="position-relative overflow-hidden">
      <div class="container container-max py-5 py-lg-6">
        <div class="row align-items-center g-5 py-lg-5">
          <div class="col-lg-7">
            <div class="pill mb-4"><i class="bi bi-stars"></i> Launch Batch Open • AgentDesk AI</div>
            <h1 class="hero-title fw-black mb-4">
              Build a <span class="brand-gradient">Real AI Business Support Agent</span> from scratch.
            </h1>
            <p class="hero-subtitle mb-4">
              A practical project-based course with <strong class="text-white">5 foundation chapters</strong> and <strong class="text-white">1 complete capstone</strong> covering AI agents, MCP basics, MCP server concepts, RAG, tools/function calling, workflow automation and human handoff.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-3 mb-4">
              <a href="${paymentLink}" class="btn btn-brand btn-lg rounded-pill px-5 py-3 fw-bold" target="_blank" rel="noopener">
                Get Launch Access for ₹0.1 <i class="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="#curriculum" class="btn btn-outline-soft btn-lg rounded-pill px-5 py-3 fw-bold">
                See Curriculum
              </a>
            </div>
            <div class="alert alert-warning border-0 rounded-4 p-3 mb-4" style="background: rgba(255,193,7,.12); color:#fde68a;">
              <div class="fw-bold mb-1"><i class="bi bi-info-circle-fill me-1"></i> How access works</div>
              <strong>Once done, share screenshot of the payment on WhatsApp: +91-9545566464.</strong><br>Then course link will be shared.
            </div>
            <div class="d-flex flex-wrap gap-3 text-muted-soft small">
              <span><i class="bi bi-check-circle-fill text-success me-1"></i> Downloadable course package</span>
              <span><i class="bi bi-check-circle-fill text-success me-1"></i> Beginner-friendly</span>
              <span><i class="bi bi-check-circle-fill text-success me-1"></i> Capstone-focused</span>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="price-card p-4 p-md-5 position-relative">
              <div class="hero-orb"></div>
              <div class="position-relative">
                <div class="row g-3 mb-4">
                  <div class="col-4"><div class="soft-card p-3 text-center h-100"><div class="stat-number">5</div><small class="text-muted-soft">Chapters</small></div></div>
                  <div class="col-4"><div class="soft-card p-3 text-center h-100"><div class="stat-number">1</div><small class="text-muted-soft">Capstone</small></div></div>
                  <div class="col-4"><div class="soft-card p-3 text-center h-100"><div class="stat-number">₹0.1</div><small class="text-muted-soft">Launch</small></div></div>
                </div>
                <div class="warning-box p-3 small">
                  <div class="fw-bold mb-1"><i class="bi bi-whatsapp me-1"></i> Access after payment</div>
                  <strong>Once done, share screenshot of the payment on WhatsApp: +91-9545566464.</strong><br>Then course link will be shared.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-4">
      <div class="container container-max">
        <div class="glass rounded-5 p-3 p-md-4">
          <div class="row g-3 text-center">
            <div class="col-6 col-lg-3"><div class="proof-card p-3 h-100"><div class="fw-bold">AI Agents</div><small class="text-muted-soft">Agent thinking & design</small></div></div>
            <div class="col-6 col-lg-3"><div class="proof-card p-3 h-100"><div class="fw-bold">MCP Concepts</div><small class="text-muted-soft">Server & tool context</small></div></div>
            <div class="col-6 col-lg-3"><div class="proof-card p-3 h-100"><div class="fw-bold">RAG</div><small class="text-muted-soft">Knowledge base flow</small></div></div>
            <div class="col-6 col-lg-3"><div class="proof-card p-3 h-100"><div class="fw-bold">Capstone</div><small class="text-muted-soft">Business support agent</small></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad pt-0" id="curriculum">
      <div class="container container-max">
        <div class="text-center mb-5">
          <div class="mini-label mb-3">Curriculum</div>
          <h2 class="display-5 fw-bold mb-3">6 focused chapters to go from basics to capstone</h2>
          <p class="text-muted-soft fs-5 mx-auto mb-0 curriculum-copy">Built for developers, freelancers, founders, students and AI beginners who want a clear practical path into modern AI agents.</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-6">
            <div class="soft-card p-4 h-100 "><div class="d-flex gap-3"><div class="chapter-number">01</div><div><h3 class="h5 fw-bold mb-2">AI Agent Foundations</h3><p class="text-muted-soft mb-0">Understand what AI agents are, how they reason, where they fit in business operations, and how to think beyond simple chatbots.</p></div></div></div>
          </div>
          <div class="col-lg-6">
            <div class="soft-card p-4 h-100 "><div class="d-flex gap-3"><div class="chapter-number">02</div><div><h3 class="h5 fw-bold mb-2">Prompt Design & Agent Roles</h3><p class="text-muted-soft mb-0">Create strong role instructions, boundaries, response formats, task framing and reliable agent behaviour patterns.</p></div></div></div>
          </div>
          <div class="col-lg-6">
            <div class="soft-card p-4 h-100 "><div class="d-flex gap-3"><div class="chapter-number">03</div><div><h3 class="h5 fw-bold mb-2">Tools & Function Calling</h3><p class="text-muted-soft mb-0">Learn how agents use external actions such as searching data, creating tickets, drafting emails and calling backend functions.</p></div></div></div>
          </div>
          <div class="col-lg-6">
            <div class="soft-card p-4 h-100 "><div class="d-flex gap-3"><div class="chapter-number">04</div><div><h3 class="h5 fw-bold mb-2">MCP Basics & MCP Server Concepts</h3><p class="text-muted-soft mb-0">Understand the Model Context Protocol at a practical level: resources, tools, context, server responsibilities and agent integration thinking.</p></div></div></div>
          </div>
          <div class="col-lg-6">
            <div class="soft-card p-4 h-100 "><div class="d-flex gap-3"><div class="chapter-number">05</div><div><h3 class="h5 fw-bold mb-2">RAG + Workflow Automation</h3><p class="text-muted-soft mb-0">Connect knowledge base thinking with structured workflows, escalation paths, human handoff and safe business automation.</p></div></div></div>
          </div>
          <div class="col-lg-6">
            <div class="soft-card p-4 h-100 border border-primary border-opacity-50"><div class="d-flex gap-3"><div class="chapter-number">06</div><div><h3 class="h5 fw-bold mb-2">Capstone: AgentDesk AI<span class="badge rounded-pill text-bg-warning text-dark ms-2">Capstone</span></h3><p class="text-muted-soft mb-0">Bring everything together to design a real AI business support agent with architecture, workflow, tools, RAG and implementation notes.</p></div></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad pt-0" id="bonus">
      <div class="container container-max">
        <div class="glass rounded-5 p-4 p-md-5">
          <div class="row align-items-center g-5">
            <div class="col-lg-5">
              <div class="mini-label mb-3">Included Bonuses</div>
              <h2 class="display-6 fw-bold mb-3">Everything you need to revise, rebuild and showcase.</h2>
              <p class="text-muted-soft fs-5 mb-0">The launch package is designed to feel complete, not like random videos.</p>
            </div>
            <div class="col-lg-7">
              <div class="row g-3">
                <div class="col-md-6"><div class="check-line soft-card p-3 h-100"><i class="bi bi-check-circle-fill"></i><span>Source/code material for reference</span></div></div>
                <div class="col-md-6"><div class="check-line soft-card p-3 h-100"><i class="bi bi-check-circle-fill"></i><span>Prompt templates and agent instructions</span></div></div>
                <div class="col-md-6"><div class="check-line soft-card p-3 h-100"><i class="bi bi-check-circle-fill"></i><span>Architecture notes and capstone flow</span></div></div>
                <div class="col-md-6"><div class="check-line soft-card p-3 h-100"><i class="bi bi-check-circle-fill"></i><span>Deployment and implementation checklist</span></div></div>
                <div class="col-md-6"><div class="check-line soft-card p-3 h-100"><i class="bi bi-check-circle-fill"></i><span>MCP + tools concept notes</span></div></div>
                <div class="col-md-6"><div class="check-line soft-card p-3 h-100"><i class="bi bi-check-circle-fill"></i><span>RAG and workflow recap material</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad pt-0">
      <div class="container container-max">
        <div class="row g-4 align-items-stretch">
          <div class="col-lg-4">
            <div class="soft-card p-4 h-100">
              <div class="feature-icon mb-4"><i class="bi bi-person-workspace"></i></div>
              <h3 class="h4 fw-bold">Who is this for?</h3>
              <div class="vstack gap-3 mt-4">
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span>Developers who want practical AI-agent project understanding.</span></div>
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span>Students who want a capstone project for learning and portfolio.</span></div>
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span>Freelancers/founders exploring support automation and AI products.</span></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="soft-card p-4 h-100">
              <div class="feature-icon mb-4"><i class="bi bi-bullseye"></i></div>
              <h3 class="h4 fw-bold">What makes it different?</h3>
              <div class="vstack gap-3 mt-4">
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span>Capstone-first learning instead of only prompt tips.</span></div>
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span>Combines agents, MCP, RAG, tools and workflows in one project.</span></div>
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span>Focused on realistic business support use case, not abstract demos.</span></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="soft-card p-4 h-100">
              <div class="feature-icon mb-4"><i class="bi bi-box-seam"></i></div>
              <h3 class="h4 fw-bold">How access works?</h3>
              <div class="vstack gap-3 mt-4">
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span>Pay securely through Cashfree using the launch link.</span></div>
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span><strong>Once done, share screenshot of the payment on WhatsApp: +91-9545566464.</strong></span></div>
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span>Then course link will be shared after payment verification.</span></div>
                <div class="check-line"><i class="bi bi-check-circle-fill"></i><span>Join the learner batch for doubts, updates and bonus material.</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad pt-0" id="pricing">
      <div class="container container-max">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="price-card p-4 p-md-5 text-center">
              <div class="position-relative">
                <div class="pill mb-4"><i class="bi bi-lightning-charge-fill"></i> Launch Offer</div>
                <h2 class="display-5 fw-bold mb-3">Start building AgentDesk AI today</h2>
                <p class="text-muted-soft fs-5 mx-auto mb-4 pricing-copy">Get the complete launch course package with foundation chapters, capstone, source/code reference, prompts and implementation notes.</p>
                <div class="d-flex justify-content-center align-items-end gap-3 mb-3">
                  <span class="price">₹0.1</span>
                  <span class="strike fs-3 mb-3">₹0.1</span>
                </div>
                <p class="text-muted-soft mb-4">One-time launch access. No subscription.</p>
                <a href="${paymentLink}" class="btn btn-brand btn-lg rounded-pill px-5 py-3 fw-bold" target="_blank" rel="noopener">
                  Buy Now with Cashfree <i class="bi bi-arrow-right ms-2"></i>
                </a>
                <p class="small text-muted-soft mt-3 mb-0">Once payment is complete, share the successful payment screenshot on WhatsApp: <strong>+91-9545566464</strong>. Course access/download instructions will be shared after verification.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section class="section-pad pt-0" id="access-now">
      <div class="container container-max">
        <div class="strong-card p-4 p-md-5">
          <div class="row align-items-center g-4">
            <div class="col-lg-7">
              <div class="mini-label mb-2">How access works</div>
              <h2 class="h1 fw-bold mb-3">Pay securely, verify once, and start learning</h2>
              <p class="text-muted-soft fs-5 mb-4">For the launch batch, access is verified through your successful Cashfree payment screenshot.</p>
              <div class="vstack gap-3">
                <div class="check-line"><i class="bi bi-1-circle-fill"></i><span>Pay securely through Cashfree using the launch link.</span></div>
                <div class="check-line"><i class="bi bi-2-circle-fill"></i><span><strong>Once done, share screenshot of the payment on WhatsApp: +91-9545566464.</strong></span></div>
                <div class="check-line"><i class="bi bi-3-circle-fill"></i><span>Then course link will be shared after payment verification.</span></div>
                <div class="check-line"><i class="bi bi-4-circle-fill"></i><span>Join the learner batch for doubts, updates and bonus material.</span></div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="soft-card p-4 h-100">
                <div class="feature-icon mb-4"><i class="bi bi-whatsapp"></i></div>
                <h3 class="h4 fw-bold">Access Support</h3>
                <p class="text-muted-soft mb-4">For quick verification, please use the correct name, email and phone while paying. <strong class="text-white">Once done, share screenshot of the payment on WhatsApp: +91-9545566464. Then course link will be shared.</strong></p>
                <a href="${paymentLink}" class="btn btn-brand rounded-pill px-4 py-3 fw-bold w-100" target="_blank" rel="noopener">
                  Pay ₹0.1 Now <i class="bi bi-arrow-right ms-2"></i>
                </a>
                <p class="small text-muted-soft mt-3 mb-0">Manual access is temporary. Success redirect for testing: <a href="${successRedirectUrl}" target="_blank" rel="noopener">Open Drive Folder</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad pt-0" id="instructor">
      <div class="container container-max">
        <div class="strong-card p-4 p-md-5">
          <div class="row align-items-center g-4">
            <div class="col-md-auto">
              <div class="logo-mark" style="width:88px;height:88px;border-radius:30px;font-size:2rem;"><i class="bi bi-person-badge"></i></div>
            </div>
            <div class="col">
              <div class="mini-label mb-2">Instructor</div>
              <h2 class="h1 fw-bold mb-2">Hemant Pawar</h2>
              <p class="text-muted-soft fs-5 mb-3">Ex-Big 4 employee and senior technology professional with 11+ years of hands-on experience across top-tier consulting and enterprise product companies. I have spent over a decade building secure, scalable platforms using .NET, Azure, React, SQL and modern AI-enabled engineering practices, working on real-world systems where reliability, architecture and business impact matter.</p>
              <p class="text-muted-soft mb-3">I created Vector AI Academy to teach AI implementation the practical way: AI agents, MCP, MCP server concepts, RAG, tools, workflows and capstone-based product thinking — without exposing any current employer or internal company work.</p>
              <div class="d-flex flex-wrap gap-2">
                <span class="badge rounded-pill text-bg-primary px-3 py-2">Ex-Big 4 Employee</span>
                <span class="badge rounded-pill text-bg-primary px-3 py-2">11+ Years Experience</span>
                <span class="badge rounded-pill text-bg-primary px-3 py-2">Top-Tier Companies</span>
                <span class="badge rounded-pill text-bg-primary px-3 py-2">AI Agents & MCP</span>
                <span class="badge rounded-pill text-bg-primary px-3 py-2">RAG & Automation</span>
                <span class="badge rounded-pill text-bg-primary px-3 py-2">Capstone Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad pt-0" id="faq">
      <div class="container container-max">
        <div class="text-center mb-5">
          <div class="mini-label mb-3">FAQ</div>
          <h2 class="display-6 fw-bold">Questions before joining?</h2>
        </div>
        <div class="accordion glass rounded-5 overflow-hidden" id="faqAccordion">
          <div class="accordion-item border-start-0 border-end-0 border-top-0"><h2 class="accordion-header"><button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#one" aria-expanded="true" aria-controls="one">Is this course beginner-friendly?</button></h2><div id="one" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion"><div class="accordion-body text-muted-soft">Yes. It starts from foundation concepts and gradually moves into MCP, RAG, tools, workflows and the AgentDesk AI capstone.</div></div></div>
          <div class="accordion-item border-start-0 border-end-0 border-top-0"><h2 class="accordion-header"><button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#two" aria-expanded="false" aria-controls="two">Do I need advanced AI knowledge?</button></h2><div id="two" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body text-muted-soft">No. Basic technical curiosity is enough. Developers will understand implementation details faster, but the course is structured step by step.</div></div></div>
          <div class="accordion-item border-start-0 border-end-0 border-top-0"><h2 class="accordion-header"><button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#three" aria-expanded="false" aria-controls="three">What exactly do I get after payment?</button></h2><div id="three" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body text-muted-soft">You get access/download instructions for the launch course package containing videos and bonus materials such as prompts, notes, architecture/checklist and source/code reference material.</div></div></div>
          <div class="accordion-item border-start-0 border-end-0 border-top-0"><h2 class="accordion-header"><button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#four" aria-expanded="false" aria-controls="four">Is this a live cohort or recorded course?</button></h2><div id="four" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body text-muted-soft">This launch version is a recorded practical course package. You may also get learner group access for doubts, updates and bonus material.</div></div></div>
          <div class="accordion-item border-start-0 border-end-0 border-top-0"><h2 class="accordion-header"><button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#five" aria-expanded="false" aria-controls="five">Is there a refund?</button></h2><div id="five" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body text-muted-soft">This is a digital educational product. Refunds are not applicable once course access/download material is shared. For genuine payment/access issues, contact support within 24 hours.</div></div></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="py-5 border-top border-white border-opacity-10">
    <div class="container container-max">
      <div class="row g-4 align-items-center">
        <div class="col-md">
          <div class="d-flex align-items-center gap-3 mb-2">
            <span class="logo-mark"><i class="bi bi-cpu-fill"></i></span>
            <div>
              <div class="fw-bold">Vector AI Academy</div>
              <small class="text-muted-soft">Practical AI courses by Hemant Pawar</small>
            </div>
          </div>
          <p class="text-muted-soft small mb-0">Support: hemantspawar1991@gmail.com</p>
        </div>
        <div class="col-md-auto">
          <a href="${paymentLink}" class="btn btn-brand rounded-pill px-4 py-3 fw-bold" target="_blank" rel="noopener">Enroll Now ₹0.1</a>
        </div>
      </div>
    </div>
  </footer>

  <div class="sticky-cta p-3">
    <div class="container container-max d-flex align-items-center justify-content-between gap-3">
      <div>
        <div class="fw-bold lh-1">AgentDesk AI</div>
        <small class="text-muted-soft">Launch access ₹0.1</small>
      </div>
      <a href="${paymentLink}" class="btn btn-brand rounded-pill px-4 py-2 fw-bold" target="_blank" rel="noopener">Buy Now</a>
    </div>
  </div>`

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href="#checkout-form"]')
    links.forEach((link) => {
      link.setAttribute('href', paymentLink)
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener')
    })
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
}

export default App
