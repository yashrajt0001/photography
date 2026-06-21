import './InstagramFeed.css'

const TILES = [
  '/images/g1.jpg',
  '/images/g6.jpg',
  '/images/g3.jpg',
  '/images/couple-2.jpg',
  '/images/g8.jpg',
  '/images/couple-11.jpg',
  '/images/g4.jpg',
  '/images/g2.jpg',
]
const IG = 'https://www.instagram.com/thephotostore.in/'

export default function InstagramFeed() {
  return (
    <section className="ig section">
      <div className="container">
        <header className="ig__head">
          <span className="eyebrow" data-reveal>As seen on</span>
          <a className="ig__handle" href={IG} target="_blank" rel="noreferrer" data-reveal data-reveal-delay="1">
            Instagram <em>@thephotostore.in</em>
          </a>
        </header>
      </div>

      <div className="ig__grid">
        {TILES.map((src, i) => (
          <a
            key={src + i}
            href={IG}
            target="_blank"
            rel="noreferrer"
            className="ig__tile img-reveal"
            data-reveal-delay={(i % 4) + 1}
          >
            <img src={src} alt="The Photo Store on Instagram" loading="lazy" />
            <span className="ig__icon" aria-hidden>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
          </a>
        ))}
      </div>

      <div className="container ig__cta">
        <a className="btn btn--ghost" href={IG} target="_blank" rel="noreferrer" data-reveal>
          Follow on Instagram
        </a>
      </div>
    </section>
  )
}
