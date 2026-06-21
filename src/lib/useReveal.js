import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Reveals on scroll: toggles `.is-in` on every [data-reveal] / .img-reveal
 * element as it enters the viewport. Re-scans on each route change.
 */
export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal], .img-reveal')
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
