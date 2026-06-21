import { useEffect, useRef } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingContact from './components/FloatingContact.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'

function ScrollManager({ lenis }) {
  const { pathname } = useLocation()
  useEffect(() => {
    lenis.current?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
  }, [pathname, lenis])
  return null
}

export default function App() {
  const lenis = useRef(null)

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    lenis.current = instance
    window.__lenis = instance

    let rafId
    const raf = (time) => {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      instance.destroy()
      if (window.__lenis === instance) window.__lenis = null
    }
  }, [])

  return (
    <>
      <ScrollManager lenis={lenis} />
      <Header lenis={lenis} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* --- HOMEPAGE-ONLY REVIEW MODE ---
              Inner pages are disabled while the client reviews the homepage.
              Re-enable by uncommenting these routes (and flip `live` in src/lib/nav.js):
          <Route path="/wedding" element={<Placeholder title="Weddings" eyebrow="The Stories" />} />
          <Route path="/films" element={<Placeholder title="Films" eyebrow="Motion" />} />
          <Route path="/about" element={<Placeholder title="About Us" eyebrow="The Photo Store" />} />
          <Route path="/contact" element={<Placeholder title="Get in Touch" eyebrow="Say hello" />} />
          */}
          {/* any unknown / disabled path falls back to the homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
