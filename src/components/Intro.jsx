import './Intro.css'

export default function Intro() {
  return (
    <section className="intro section" id="intro">
      <div className="container intro__grid">
        <div className="intro__media">
          <figure className="intro__img intro__img--main img-reveal">
            <img src="/images/intro-4.jpg" alt="Wedding photography" loading="lazy" />
          </figure>
          <figure className="intro__img intro__img--accent img-reveal" data-reveal-delay="2">
            <img src="/images/intro-2.jpg" alt="Candid couple portrait" loading="lazy" />
          </figure>
        </div>

        <div className="intro__copy">
          <span className="eyebrow" data-reveal>Hello</span>
          <h2 className="intro__title" data-reveal data-reveal-delay="1">
            Welcome to <em>our&nbsp;studio</em>
          </h2>
          <p className="intro__lead" data-reveal data-reveal-delay="2">
            Our aim is to give you our very best in photography &amp; films.
          </p>
          <p className="intro__body" data-reveal data-reveal-delay="3">
            Having been assigned to capture the most important days in your life, we leave no stone
            unturned to click the best. We love doing what we do — connecting with amazing people like
            you, the lights &amp; the magical moments of your wedding that we are a part of.
          </p>
          <a className="btn btn--ghost intro__cta" href="#gallery" data-reveal data-reveal-delay="4">
            View Our Weddings
          </a>
        </div>
      </div>
    </section>
  )
}
