import { useEffect } from 'react'

export default function useIntersectionAnimation({ targets = [], skillBarSelector = '' } = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('visible')

        if (skillBarSelector) {
          try {
            entry.target.querySelectorAll && entry.target.querySelectorAll(skillBarSelector).forEach((bar) => {
              const w = bar.dataset.width || bar.getAttribute('data-width') || '0'
              bar.style.width = `${w}%`
            })
          } catch (error) {
            // ignore if selector is not supported by the entry target
          }
        }
      })
    }, { threshold: 0.12 })

    targets.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => observer.observe(element))
    })

    if (skillBarSelector) {
      document.querySelectorAll(skillBarSelector).forEach((bar) => observer.observe(bar.parentElement || bar))
    }

    return () => observer.disconnect()
  }, [targets, skillBarSelector])
}
