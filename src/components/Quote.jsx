import './Quote.css'

export default function Quote() {
  return (
    <section className="quote section">
      <div className="container quote__inner">
        <span className="quote__mark" aria-hidden>“</span>
        <p className="quote__text" data-reveal="fade">
          People don&rsquo;t need pictures anymore,
          <br />
          they need <em>moments</em>.
        </p>
      </div>
    </section>
  )
}
