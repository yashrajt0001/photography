import { CONTACT_FORM } from '../lib/nav.js'
import './GetInTouch.css'

export default function GetInTouch() {
  return (
    <section className="cta">
      <div className="cta__bg" style={{ backgroundImage: 'url(/images/cta-bg.jpg)' }} />
      <div className="cta__tint" />
      <div className="cta__content">
        <span className="eyebrow cta__eyebrow" data-reveal>Let&rsquo;s create together</span>
        <h2 className="cta__title" data-reveal data-reveal-delay="1">
          Get in <em>Touch</em>
        </h2>
        <p className="cta__text" data-reveal data-reveal-delay="2">
          Tell us about your day. We&rsquo;d love to hear your story and capture the moments that
          matter most.
        </p>
        <a
          className="btn cta__btn"
          href={CONTACT_FORM}
          target="_blank"
          rel="noreferrer"
          data-reveal
          data-reveal-delay="3"
        >
          Enquire Now
        </a>
      </div>
    </section>
  )
}
