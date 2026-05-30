import { useState } from 'react'
import { Send, Globe, Users, AtSign, Mail } from 'lucide-react'
import { owner } from '../data/portfolioData'
import './Contact.css'
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent]   = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())                      e.name    = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required.'
    if (form.message.trim().length < 10)        e.message = 'Message must be at least 10 characters.'
    if (!hCaptchaToken)                         e.submit  = 'Please complete the captcha.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
    if (errors.submit) setErrors(prev => { const n = { ...prev }; delete n.submit; return n })
  }

  const [hCaptchaToken, setHCaptchaToken] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) return setErrors(errs)

    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Web3Forms Access Key
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          "h-captcha-response": hCaptchaToken,
        }),
      })
      
      const result = await response.json()
      if (result.success) {
        setSent(true)
      } else {
        setErrors({ submit: result.message || "Failed to send message. Please try again later." })
      }
    } catch (error) {
      setErrors({ submit: "An error occurred while sending the message." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const onHCaptchaChange = (token) => {
    setHCaptchaToken(token);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-container contact__inner">

        {/* Left — copy */}
        <div className="contact__copy reveal">
          <p className="section-label">Contact</p>
          <h2 className="heading-chrome">Let's Build Something</h2>
          <p className="contact__blurb">
            Open to full-time roles, freelance contracts, and interesting collabs.
            Send a message or reach out directly via the links below.
          </p>

          <div className="contact__socials">
            <a href={`mailto:${owner.email}`}    className="contact__social-link" aria-label="Email"><Mail     size={18} />{owner.email}</a>
            <a href={owner.github}   target="_blank" rel="noreferrer" className="contact__social-link" aria-label="GitHub"><Globe   size={18} />GitHub</a>
            <a href={owner.linkedin} target="_blank" rel="noreferrer" className="contact__social-link" aria-label="LinkedIn"><Users size={18} />LinkedIn</a>
          </div>
        </div>

        {/* Right — form */}
        <div className="glass-card contact__form-wrap reveal">
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <h3>Message Sent</h3>
              <p>Thanks for reaching out — I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'contact__input--error' : ''}
                />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'contact__input--error' : ''}
                />
                {errors.email && <span className="contact__error">{errors.email}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? 'contact__input--error' : ''}
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>
              
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={onHCaptchaChange} 
              /> 

              <button type="submit" className="btn-primary contact__submit" disabled={isSubmitting}>
                <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {errors.submit && <div className="contact__error" style={{marginTop: '1rem', textAlign: 'center'}}>{errors.submit}</div>}

            </form>
          )}
        </div>

      </div>
    </section>
  )
}
