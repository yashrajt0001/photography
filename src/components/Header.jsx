import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV, SOCIALS, PHONE, PHONE_TEL, EMAIL, WHATSAPP } from '../lib/nav.js'
import './Header.css'

export default function Header({ lenis }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  useEffect(() => setOpen(false), [pathname])

  // lock scroll while overlay open
  useEffect(() => {
    if (open) {
      lenis?.current?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      lenis?.current?.start()
      document.body.style.overflow = ''
    }
    return () => {
      lenis?.current?.start()
      document.body.style.overflow = ''
    }
  }, [open, lenis])

  return (
    <>
      <div className={`site-header${scrolled ? ' site-header--solid' : ''}`}>
        <header className="header">
          <div className="header__inner">
            <Link to="/" className="header__logo" aria-label="Demo — home">
              <span className="header__logo-text">Demo</span>
            </Link>
            <nav className="header__nav" aria-label="Primary">
              {NAV.map((item) =>
                item.live ? (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`header__navlink${pathname === item.to ? ' is-active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    key={item.to}
                    className="header__navlink is-disabled"
                    aria-disabled="true"
                    title="Coming soon"
                  >
                    {item.label}
                  </span>
                )
              )}
            </nav>
            <div className="header__actions">
              <div className="header__cta">
                <a className="header__call" href={`tel:${PHONE_TEL}`}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  <span className="header__call-text">Call</span>
                  <span className="header__call-num">{PHONE}</span>
                </a>
              </div>
              <button
                className="burger"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </header>
      </div>

      <nav className={`overlay${open ? ' overlay--open' : ''}`} aria-hidden={!open}>
        <button className="overlay__close" onClick={() => setOpen(false)} aria-label="Close menu">
          <span />
          <span />
        </button>
        <ul className="overlay__list">
          {NAV.map((item, i) => (
            <li key={item.to} style={{ '--i': i }}>
              {item.live ? (
                <Link
                  to={item.to}
                  className={`overlay__link${pathname === item.to ? ' is-active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="overlay__link is-disabled" aria-disabled="true">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="overlay__contact">
          <span className="overlay__contact-label">Get in touch</span>
          <a className="overlay__contact-link" href={`tel:${PHONE_TEL}`}>
            {PHONE}
          </a>
          <div className="overlay__contact-row">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
            <span aria-hidden>·</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>

        <div className="overlay__socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
