import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', updateVisibility)
    updateVisibility()
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <button id="scroll-top" className={visible ? 'show' : ''} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
  )
}
