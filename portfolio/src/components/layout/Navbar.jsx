import { useEffect, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
      const current = navItems.reduce((active, item) => {
        const section = document.getElementById(item.id)
        if (!section) return active
        if (window.scrollY >= section.offsetTop - 120) return item.id
        return active
      }, 'home')
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMobile() {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  function toggleMenu() {
    setMenuOpen((prev) => {
      const next = !prev
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-xl text-white" style={{ textDecoration: 'none' }}>
            <span className="grad">KA</span><span style={{ color: 'var(--muted)' }}>.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary text-sm py-2 px-5" style={{ fontSize: 13, padding: '9px 20px' }}>
              <span>Hire Me</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <button id="menu-toggle" className="md:hidden flex flex-col gap-1.5 p-2" onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <span className="menu-bar" style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', transition: 'all 0.3s', borderRadius: 2 }}></span>
            <span className="menu-bar" style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', transition: 'all 0.3s', borderRadius: 2 }}></span>
            <span className="menu-bar" style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', transition: 'all 0.3s', borderRadius: 2 }}></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="mobile-link" onClick={closeMobile}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
