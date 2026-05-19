import { useEffect } from 'react'

export default function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (!visible) return
    const timer = window.setTimeout(() => {
      onClose()
    }, 3500)

    return () => window.clearTimeout(timer)
  }, [visible, onClose])

  return (
    <div id="toast" className={visible ? 'show' : ''} aria-live="polite">
      {message || '✅ Message sent! I\'ll get back to you soon.'}
    </div>
  )
}
