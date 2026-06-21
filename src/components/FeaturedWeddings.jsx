import './FeaturedWeddings.css'

// During homepage-only review these point to the on-page gallery (#gallery).
// When the Wedding page is live, swap href="#gallery" back to <Link to="/wedding">.
const STORIES = [
  { name: 'Aanya & Veer', place: 'Goa', date: 'March 11, 2024', img: '/images/featured-harshita.jpg' },
  { name: 'Tara & Aryan', place: 'Udaipur', date: 'March 2, 2024', img: '/images/featured-ria.jpg' },
  { name: 'Naina & Karan', place: 'Kerala', date: 'May 28, 2023', img: '/images/featured-jobin.jpg' },
]

export default function FeaturedWeddings() {
  return (
    <section className="featured section">
      <div className="container">
        <header className="featured__head">
          <span className="eyebrow" data-reveal>&mdash;&nbsp; The Stories</span>
          <h2 className="featured__title" data-reveal data-reveal-delay="1">
            Recent <em>Weddings</em>
          </h2>
        </header>

        <div className="featured__grid">
          {STORIES.map((s, i) => (
            <a
              href="#gallery"
              key={s.name}
              className={`story story--${i + 1}`}
              data-reveal
              data-reveal-delay={i + 1}
            >
              <div className="story__media img-reveal">
                <img src={s.img} alt={`${s.name} wedding`} loading="lazy" />
                <span className="story__view">View Story</span>
              </div>
              <div className="story__meta">
                <h3 className="story__name">{s.name}</h3>
                <p className="story__sub">
                  {s.place} <span>·</span> {s.date}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="featured__more" data-reveal>
          <a href="#gallery" className="btn">
            View All Weddings
          </a>
        </div>
      </div>
    </section>
  )
}
