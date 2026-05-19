import { useEffect } from 'react'

export default function useTypingEffect(elementRef, phrases = [], typingSpeed = 100, pauseDelay = 2000) {
  useEffect(() => {
    const el = elementRef?.current
    if (!el || phrases.length === 0) return

    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId = null

    const type = () => {
      const phrase = phrases[phraseIndex]
      if (!deleting) {
        el.textContent = phrase.slice(0, charIndex + 1)
        charIndex += 1
        if (charIndex === phrase.length) {
          deleting = true
          timeoutId = window.setTimeout(type, pauseDelay)
          return
        }
      } else {
        el.textContent = phrase.slice(0, charIndex - 1)
        charIndex -= 1
        if (charIndex <= 0) {
          deleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
        }
      }
      timeoutId = window.setTimeout(type, deleting ? typingSpeed / 1.5 : typingSpeed)
    }

    type()
    return () => window.clearTimeout(timeoutId)
  }, [elementRef, phrases, typingSpeed, pauseDelay])
}
