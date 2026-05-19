import { useEffect } from 'react'

export default function useScrollProgress(selector) {
  useEffect(() => {
    if (!selector) return

    const progressBar = document.querySelector(selector)
    if (!progressBar) return

    const update = () => {
      const h = document.documentElement
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      progressBar.style.width = `${pct}%`
    }

    window.addEventListener('scroll', update)
    update()

    return () => window.removeEventListener('scroll', update)
  }, [selector])
}
