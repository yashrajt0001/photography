import { Link } from 'react-router-dom'
import { NAV, SOCIALS, CONTACT_FORM, PHONE, PHONE_TEL, EMAIL } from '../lib/nav.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link to="/" className="footer__logo" aria-label="Demo — home">
          <span className="footer__logo-text">Demo</span>
        </Link>
        <p className="footer__tag">Wedding Photographers &amp; Filmmakers</p>
        <div className="footer__contact">
          <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          <span aria-hidden>·</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <a className="footer__enquire" href={CONTACT_FORM} target="_blank" rel="noreferrer">
          Enquire Now
        </a>
      </div>

      <nav className="footer__nav">
        {NAV.map((item) =>
          item.live ? (
            <Link key={item.to} to={item.to} className="footer__link">
              {item.label}
            </Link>
          ) : (
            <span key={item.to} className="footer__link is-disabled" aria-disabled="true" title="Coming soon">
              {item.label}
            </span>
          )
        )}
      </nav>

      <div className="footer__socials">
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>

      <div className="footer__bottom">
        <span>All content Copyright © {year} DEMO</span>
        <span className="footer__credit">Crafted with care</span>
      </div>
    </footer>
  )
}
