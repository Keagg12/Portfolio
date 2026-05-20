import { useEffect, useRef } from 'react'
import useTypingEffect from '../../hooks/useTypingEffect'
import ParticleCanvas from './ParticleCanvas'
import HeroCodeBlock from './HeroCodeBlock'

export default function Hero() {
  const typedRef = useRef(null)

  useTypingEffect(typedRef, [
    'Frontend Developer',
    'React Developer',
    'Full-Stack Learner',
    'DSA Enthusiast',
    'Open Source Learner',
  ], 100, 2000)

  useEffect(() => {
    const heroCode = document.querySelector('.hero-code')
    if (!heroCode) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const animateCounter = (el, target, suffix = '') => {
          let start = 0
          const step = target / (1500 / 16)
          const timer = window.setInterval(() => {
            start = Math.min(start + step, target)
            el.textContent = Math.floor(start) + suffix
            if (start >= target) window.clearInterval(timer)
          }, 16)
        }

        const c1 = document.getElementById('c1')
        const c2 = document.getElementById('c2')
        const c3 = document.getElementById('c3')
        const c4 = document.getElementById('c4')

        if (c1) animateCounter(c1, 70, '+')
        if (c2) animateCounter(c2, 4, '+')
        if (c3) animateCounter(c3, 12, '+')
        if (c4) c4.textContent = '1'

        observer.disconnect()
      })
    }, { threshold: 0.5 })

    observer.observe(heroCode)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home">
      <ParticleCanvas />
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="animate-in" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: 999, padding: '6px 16px', marginBottom: 28, fontSize: 13, color: 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', animation: 'pulse 1.5s infinite', display: 'inline-block' }}></span>
              Available for Internships &amp; Opportunities
            </div>
            <h1 className="font-display font-extrabold leading-none mb-4 animate-in" style={{ fontSize: 'clamp(42px,6vw,80px)', animationDelay: '0.1s' }}>
              Hi, I'm<br />
              <span className="grad" style={{ display: 'inline-block' }}>Keshav</span><br />
              <span style={{ color: 'var(--text)' }}>Aggarwal</span>
            </h1>
            <div className="animate-in mb-6" style={{ animationDelay: '0.2s' }}>
              <p style={{ fontSize: 'clamp(14px,2vw,18px)', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
                &gt;&nbsp;<span id="typed-text" ref={typedRef} style={{ color: 'var(--cyan)' }}></span><span className="cursor"></span>
              </p>
            </div>
            <p className="animate-in mb-8" style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 500, animationDelay: '0.3s' }}>
              Frontend-focused developer building responsive React applications with Tailwind CSS. Currently exploring backend APIs and full-stack tools while strengthening problem-solving skills through DSA.
            </p>
            <div className="flex flex-wrap gap-3 animate-in" style={{ animationDelay: '0.4s' }}>
              <a href="#projects" className="btn-primary"><span>View Projects</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              <a href="#contact" className="btn-outline">Contact Me</a>
              <a href="/resume.pdf" download className="btn-ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Resume
              </a>
            </div>
            <div className="flex gap-4 mt-8 animate-in" style={{ animationDelay: '0.5s' }}>
              <a href="mailto:Keshavaggarwal1232@gmail.com" className="social-icon" style={{ color: 'var(--muted)', transition: 'color 0.3s', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
              </a>
              <a href="https://linkedin.com/in/keshav-aggarwal07" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'var(--muted)', transition: 'color 0.3s', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/Keagg12" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'var(--muted)', transition: 'color 0.3s', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>
          <HeroCodeBlock />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'float 2s ease-in-out infinite' }}>
        <span style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>scroll</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(180deg,var(--cyan),transparent)' }}></div>
      </div>
    </section>
  )
}
