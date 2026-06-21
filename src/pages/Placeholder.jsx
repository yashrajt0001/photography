import useReveal from '../lib/useReveal.js'
import { Link } from 'react-router-dom'
import './Placeholder.css'

export default function Placeholder({ title, eyebrow }) {
  useReveal()
  return (
    <section className="ph">
      <div className="ph__bg" style={{ backgroundImage: 'url(/images/hero-3.jpg)' }} />
      <div className="ph__tint" />
      <div className="ph__content">
        <span className="eyebrow ph__eyebrow" data-reveal>{eyebrow}</span>
        <h1 className="ph__title" data-reveal data-reveal-delay="1">{title}</h1>
        <p className="ph__note" data-reveal data-reveal-delay="2">
          This page is coming soon. The homepage is fully built — these sections are next.
        </p>
        <Link to="/" className="btn ph__btn" data-reveal data-reveal-delay="3">
          Back Home
        </Link>
      </div>
    </section>
  )
}
