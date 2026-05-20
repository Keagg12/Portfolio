import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.getElementById('home')?.offsetHeight || window.innerHeight
    }

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.r = Math.random() * 1.5 + 0.5
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.a = Math.random() * 0.4 + 0.1
        this.c = Math.random() > 0.5 ? '6,182,212' : '139,92,246'
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.c},${this.a})`
        ctx.fill()
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    for (let i = 0; i < 80; i += 1) particles.push(new Particle())

    const drawLines = () => {
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - d / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    let raf = null
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => { p.update(); p.draw() })
      drawLines()
      raf = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas id="particles" ref={canvasRef} />
}
