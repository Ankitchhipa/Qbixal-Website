import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import qbixalIcon from './qbixal-icon.svg'

const services = [
  ['▣', 'Android App Development', 'Custom Android apps, API and payment integrations, push notifications, and ongoing updates.'],
  ['◫', 'Website Development', 'Business websites, landing pages, portfolios, e-commerce, responsive builds, and maintenance.'],
  ['⌘', 'Custom Software Development', 'Business management tools, workflow automation, and database-driven applications built around your requirements.'],
  ['◎', 'CRM Solutions', 'Manage customers, leads, follow-ups, sales, customer history, reports, and dashboards in one place.'],
  ['▤', 'Billing & Inventory', 'Billing, invoicing, products, inventory, customer records, payments, and sales reporting.'],
  ['✦', 'AI & Business Automation', 'AI features, chatbot integration, support automation, and custom data or document processing.'],
  ['⌁', 'Backend & API Development', 'REST APIs, authentication, databases, integrations, and cloud-ready backend systems.'],
  ['↻', 'Maintenance & Support', 'Bug fixes, updates, performance improvements, and long-term technical support for your product.'],
]

const audiences = [['I have a business idea', 'Turn the idea into a working digital product.'], ['I need a mobile app', 'Build a professional Android application.'], ['I need a website', 'Create a modern website for your business.'], ['I need business software', 'Automate and simplify daily operations.'], ['I need customer management', 'Build a customized CRM for your team.'], ['I want to use AI', 'Add AI-powered automation to your workflow.']]
const process = [['01', 'Discover', 'Understand your business, goals, and requirements.'], ['02', 'Plan', 'Define features, technology, and project scope.'], ['03', 'Design', 'Create a clear, useful, and polished experience.'], ['04', 'Build', 'Develop, integrate, test, and refine the product.'], ['05', 'Launch', 'Deploy the solution and support it as you grow.']]
const reasons = [['Business-Focused', 'Understand the business problem before choosing the technology.'], ['Custom Solutions', 'Build around your actual requirements, customers, and workflows.'], ['Modern Technology', 'Use current development practices and scalable architecture.'], ['Transparent Process', 'Keep communication clear from the first conversation to launch.'], ['Scalable Products', 'Create foundations that can grow with your business.'], ['Long-Term Support', 'Continue helping with updates, improvements, and technical support.']]
const technologies = [['Mobile', 'Android · Kotlin'], ['Web', 'HTML · CSS · JavaScript · React'], ['Backend', 'Node.js · Java · REST APIs'], ['Data', 'MySQL · PostgreSQL · Firebase'], ['AI', 'AI APIs · Workflow automation']]

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const phone = String(formData.get('phone') || '').replace(/[\s()-]/g, '')
    const email = String(formData.get('email') || '')
    const details = String(formData.get('details') || '').trim()

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    if (!/^\+?[0-9]{10,15}$/.test(phone)) {
      setFormError('Enter a valid phone number with 10 to 15 digits.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setFormError('Enter a valid email address.')
      return
    }

    if (details.length < 20) {
      setFormError('Please provide at least 20 characters about your project.')
      return
    }

    setFormError('')
    setSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xrpgvzle', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Formspree submission failed')
      }

      form.reset()
      setSubmitted(true)
    } catch {
      setFormError('We could not send your enquiry. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return <div className="site-shell">
    <header className="nav-wrap"><nav className="nav" aria-label="Primary navigation">
      <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Qbixal home"><img className="brand-mark brand-icon" src={qbixalIcon} alt="" />Qbixal</a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? 'Close' : 'Menu'}</span><i aria-hidden="true">{menuOpen ? '×' : '☰'}</i></button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="nav-links"><a href="#top" onClick={closeMenu}>Home</a><a href="#services" onClick={closeMenu}>Services</a><a href="#solutions" onClick={closeMenu}>Solutions</a><a href="#process" onClick={closeMenu}>Process</a><a href="#portfolio" onClick={closeMenu}>Portfolio</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Get a Free Consultation <Arrow /></a></div>
    </nav></header>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> QBIXAL PRIVATE LIMITED</p>
          <h1>Turn Your Ideas Into <span>Digital Solutions</span></h1>
          <p className="hero-intro">We build modern websites, Android apps, custom software, CRM systems and AI-powered solutions that help businesses work smarter and grow faster.</p>
          <div className="hero-actions"><a className="button button-blue" href="#contact">Get a Free Consultation <Arrow /></a><a className="text-link" href="#services">Explore Our Services <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-product" aria-label="Website, mobile app, and software dashboard preview" role="img">
          <div className="product-window">
            <div className="window-bar"><span className="window-logo">q</span><span className="window-title">Business / Dashboard</span><span className="window-dots">•••</span></div>
            <div className="window-body">
              <aside><span className="side-active">▦</span><span>◫</span><span>⌁</span><span>⚙</span></aside>
              <div className="dashboard">
                <div className="dash-top"><div><small>Business overview</small><strong>Everything in one place</strong></div><span className="avatar">Q</span></div>
                <div className="dash-cards"><div><small>Open projects</small><strong>24</strong><span className="up">Organized</span></div><div><small>Team progress</small><strong>86%</strong><span className="up">On track</span></div></div>
                <div className="chart"><div className="chart-head"><strong>Performance overview</strong><span>View report⌄</span></div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
              </div>
            </div>
          </div>
          <div className="floating-note"><span>✦</span><div><strong>Built for your business</strong><small>Practical · Scalable · Clear</small></div></div>
        </div>
      </section>

      <section className="trust-strip section-pad" aria-label="Qbixal capabilities"><strong>From idea to launch — we build technology around your business.</strong><div className="trust-tags"><span>Android</span><span>Web</span><span>Software</span><span>CRM</span><span>AI</span><span>APIs</span></div></section>

      <section className="manifesto section-pad" id="about"><div className="section-kicker"><span>About Qbixal Private Limited</span><span>01 / 08</span></div><div className="manifesto-grid"><h2>Technology that moves your <span>business forward.</span></h2><div className="manifesto-detail"><p>Qbixal is a product engineering partner for businesses that want practical, accessible technology. We turn complex requirements into clear digital products your team can use every day.</p><a className="text-link" href="#contact">Discuss your idea <Arrow /></a></div></div></section>

      <section className="services section-pad" id="services"><div className="section-kicker"><span>Services</span><span>02 / 08</span></div><h2 className="section-title">Technology solutions built around your <span>business.</span></h2><p className="section-intro">Whether you need a mobile app, website, business software or automation, Qbixal builds customized solutions around your requirements.</p><div className="service-grid">{services.map(([icon, title, text]) => <article className="service-card" key={title}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{text}</p><a className="text-link" href="#contact">Learn More <Arrow /></a></article>)}</div></section>

      <section className="audience section-pad" id="solutions"><div className="section-kicker"><span>Solutions</span><span>03 / 08</span></div><h2 className="section-title">What can we build <span>for you?</span></h2><p className="section-intro">Tell us what you need to make work easier. We will help shape the right digital solution.</p><div className="audience-grid">{audiences.map(([title, text], index) => <article className="audience-card" key={title}><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p><a className="text-link" href="#contact">Explore solution <Arrow /></a></article>)}</div></section>

      <section className="process section-pad" id="process"><div className="section-kicker"><span>How We Work</span><span>04 / 08</span></div><h2>From idea to <span>launch.</span></h2><div className="process-grid">{process.map(([number, title, text]) => <article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="why section-pad"><div className="section-kicker"><span>Why Qbixal</span><span>05 / 08</span></div><div className="why-layout"><h2>Build with a partner who understands the <span>business.</span></h2><div className="reason-list">{reasons.map(([title, text]) => <div className="reason" key={title}><span>✓</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="portfolio section-pad" id="portfolio"><div className="section-kicker"><span>Portfolio</span><span>06 / 08</span></div><div className="portfolio-heading"><h2>Made for real <span>business needs.</span></h2><p>Explore the kinds of digital products Qbixal can plan, design, and build. Project examples will be added as work is approved for publication.</p></div><div className="portfolio-grid"><article className="portfolio-card portfolio-blue"><div className="portfolio-visual"><div className="mini-screen"><span>CRM</span><strong>Customer<br />relationships,<br /><em>made clear.</em></strong><i /></div></div><div className="portfolio-copy"><span>Placeholder project</span><h3>Business CRM platform</h3><p>Customer, lead, follow-up, and reporting workflows in one focused system.</p><small>React · REST API · Database</small><a className="text-link" href="#contact">Discuss a similar project <Arrow /></a></div></article><article className="portfolio-card portfolio-lilac"><div className="portfolio-visual"><div className="phone-screen"><span>Inventory</span><strong>Know what’s<br /><em>in stock.</em></strong><div className="phone-bars"><i /><i /><i /></div></div></div><div className="portfolio-copy"><span>Placeholder project</span><h3>Billing & inventory app</h3><p>Simple tools for products, invoices, payments, and sales records.</p><small>Android · Kotlin · Firebase</small><a className="text-link" href="#contact">Discuss a similar project <Arrow /></a></div></article><article className="portfolio-card portfolio-blue"><div className="portfolio-visual"><div className="phone-screen phone-screen-app"><span>Mobile app</span><strong>Useful tools,<br /><em>wherever you work.</em></strong><div className="phone-bars"><i /><i /><i /></div></div></div><div className="portfolio-copy"><span>Placeholder project</span><h3>Business mobile app</h3><p>A customer-facing Android application connected to your business backend.</p><small>Android · Kotlin · REST API</small><a className="text-link" href="#contact">Discuss a similar project <Arrow /></a></div></article><article className="portfolio-card portfolio-lilac"><div className="portfolio-visual"><div className="mini-screen mini-screen-ai"><span>AI automation</span><strong>Less busywork,<br /><em>more momentum.</em></strong><i /></div></div><div className="portfolio-copy"><span>Placeholder project</span><h3>AI workflow automation</h3><p>Practical AI features that classify, summarize, and move repetitive work forward.</p><small>AI APIs · Workflow · Integrations</small><a className="text-link" href="#contact">Discuss a similar project <Arrow /></a></div></article></div></section>

      <section className="technology section-pad"><div className="section-kicker"><span>Technology</span><span>Relevant tools</span></div><div className="tech-grid">{technologies.map(([title, text]) => <div className="tech-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="contact section-pad" id="contact"><div className="contact-heading"><p className="eyebrow">Have an idea or business requirement?</p><h2>Let’s build<br /><span>it together.</span></h2></div><div className="contact-form-wrap">{submitted ? <div className="success-message"><span className="success-mark">✓</span><h3>Enquiry received.</h3><p>Thank you. We’ll review your requirement and get in touch.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another <Arrow /></button></div> : <form className="contact-form" noValidate onSubmit={handleSubmit}><label>Name<input required minLength="2" name="name" placeholder="Your name" /></label><label>Company / Business Name<input required minLength="2" name="company" placeholder="Your company" /></label><div className="form-row"><label>Phone Number<input required name="phone" inputMode="tel" pattern="[+]?[0-9 ()-]{10,20}" placeholder="Your phone number" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Service Required<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(([, title]) => <option key={title}>{title}</option>)}</select></label><label>Project Budget <span>(optional)</span><input name="budget" placeholder="Your budget range" /></label></div><label>Project Details<textarea required minLength="20" name="details" placeholder="Tell us about your idea or requirement..." rows="4" /></label>{formError && <p className="form-error" role="alert">{formError}</p>}<button className="button button-light" type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send Enquiry'} {!submitting && <Arrow />}</button></form>}</div></section>
    </main>

    <footer className="footer section-pad"><div className="footer-brand"><a className="wordmark" href="#top"><img className="brand-mark brand-icon" src={qbixalIcon} alt="" />Qbixal</a><p>Qbixal Private Limited<br />Technology Solutions for Business Growth</p></div><div className="footer-links"><strong>Explore</strong><a href="#about">About</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#process">Process</a><a href="#contact">Contact</a></div><div className="footer-links"><strong>Services</strong><a href="#services">Android App Development</a><a href="#services">Website Development</a><a href="#services">Custom Software</a><a href="#services">CRM Solutions</a><a href="#services">AI & Automation</a></div><div className="footer-bottom"><span>© Qbixal Private Limited. All Rights Reserved.</span><a href="mailto:qbixal1@gmail.com">qbixal1@gmail.com</a></div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
