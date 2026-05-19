import { useState } from 'react'
import './styles/global.css'
import useScrollProgress from './hooks/useScrollProgress'
import useIntersectionAnimation from './hooks/useIntersectionAnimation'
import Navbar from './components/layout/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'
import ScrollTop from './components/common/ScrollTop'
import Toast from './components/common/Toast'

function App() {
  const [toastMessage, setToastMessage] = useState('✅ Message sent! I\'ll get back to you soon.')
  const [toastVisible, setToastVisible] = useState(false)

  useScrollProgress('#progress-bar')
  useIntersectionAnimation({
    targets: ['.animate-in', '.animate-in-left', '.animate-scale'],
    skillBarSelector: '.skill-bar',
  })

  function showToast(message = '✅ Message sent! I\'ll get back to you soon.') {
    setToastMessage(message)
    setToastVisible(true)
  }

  return (
    <>
      <div className="noise"></div>
      <div id="progress-bar"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact onSend={() => showToast()} />
      </main>
      <Footer />
      <ScrollTop />
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </>
  )
}

export default App
