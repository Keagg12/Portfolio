import { useState } from 'react'

export default function Contact({ onSend }){
  const [sending, setSending] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e){
    e && e.preventDefault()

    const mailSubject = subject.trim() || `Portfolio message from ${firstName} ${lastName}`
    const mailBody = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:Keshavaggarwal1232@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`

    setSending(true)
    window.open(mailto, '_self')

    setTimeout(()=>{
      setSending(false)
      if (onSend) onSend('📨 Opening your email client...')
    }, 1400)
  }

  return (
    <section id="contact" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-grid"></div>
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse,rgba(6,182,212,0.06),transparent 70%)', pointerEvents: 'none' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in">
          <p className="section-label">Get In Touch</p>
          <div className="section-divider" style={{ margin: '12px auto 20px' }}></div>
          <h2 className="section-title">Let's <span className="grad">Work Together</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>I'm actively looking for internship opportunities. Whether you have a project, an offer, or just want to say hello — my inbox is always open.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-in-left">
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Ready to build something <span className="grad-cv">amazing?</span></h3>
            <p style={{ color: 'var(--muted)', marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>I bring strong frontend skills, growing full-stack capabilities, deep DSA fundamentals, and an eagerness to learn and contribute from day one.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              <a href="mailto:Keshavaggarwal1232@gmail.com" className="contact-card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg,rgba(6,182,212,0.2),rgba(6,182,212,0.05))', border: '1px solid rgba(6,182,212,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth={2}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 2 }}>Email</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--cyan)' }}>Keshavaggarwal1232@gmail.com</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/keshav-aggarwal07" target="_blank" rel="noreferrer" className="contact-card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg,rgba(139,92,246,0.2),rgba(139,92,246,0.05))', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--violet)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 2 }}>LinkedIn</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--violet)' }}>linkedin.com/in/keshav-aggarwal07</div>
                </div>
              </a>
              <a href="https://github.com/Keagg12" target="_blank" rel="noreferrer" className="contact-card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg,rgba(240,171,252,0.15),rgba(240,171,252,0.03))', border: '1px solid rgba(240,171,252,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--pink)"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 2 }}>GitHub</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--pink)' }}>github.com/Keagg12</div>
                </div>
              </a>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', animation: 'pulse 2s infinite' }}></div>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#10b981' }}>Open to Opportunities</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>Available for: SWE Internships · Frontend roles · Full-stack projects · Freelance work · Open source collaboration</p>
            </div>
          </div>
          <div className="animate-in" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 36, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,var(--cyan),var(--violet),var(--pink))' }}></div>
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Send a Message</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--muted)', marginBottom: 8 }}>First Name</label>
                  <input type="text" className="contact-input" placeholder="Rahul" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--muted)', marginBottom: 8 }}>Last Name</label>
                  <input type="text" className="contact-input" placeholder="Sharma" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--muted)', marginBottom: 8 }}>Email Address</label>
                <input type="email" className="contact-input" placeholder="recruiter@company.com" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--muted)', marginBottom: 8 }}>Subject</label>
                <input type="text" className="contact-input" placeholder="Internship Opportunity at XYZ Company" value={subject} onChange={e => setSubject(e.target.value)} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--muted)', marginBottom: 8 }}>Message</label>
                <textarea className="contact-input" rows={5} placeholder="Hi Keshav, I came across your portfolio and would love to discuss an internship opportunity..." style={{ resize: 'vertical', minHeight: 120 }} value={message} onChange={e => setMessage(e.target.value)}></textarea>
              </div>
              <button className="btn-primary w-full" type="submit" style={{ width: '100%', justifyContent: 'center', padding: 14 }}>
                <span id="btn-text">{sending ? 'Sending...' : 'Send Message'}</span>
                <svg id="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>
              </button>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 16, lineHeight: 1.6 }}>
                If an email app does not open, please use the email card on the left or send directly to <strong>keshavaggarwal1232@gmail.com</strong>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
