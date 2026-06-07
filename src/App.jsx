import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-primary">
      <Navbar scrolled={scrolled} />

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />

      {/* Scroll to top */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: scrolled ? 1 : 0, scale: scrolled ? 1 : 0.8 }}
        transition={{ duration: 0.25 }}
      >
        <Link
          to="home"
          smooth duration={500}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 cursor-pointer transition-all duration-200 hover:shadow-[0_0_16px_rgba(100,255,218,0.2)]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </Link>
      </motion.div>
    </div>
  )
}

export default App
