import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import './Testimonials.css'

const ITEMS = [
  {
    couple: 'Aarav & Diya',
    img: '/images/couple-1.jpg',
    quote:
      'Choosing this team was one of the best decisions we made during our wedding planning. They helped us achieve the Pinterest-perfect wedding we dreamed of.',
  },
  {
    couple: 'Kabir & Anaya',
    img: '/images/couple-4.jpg',
    quote:
      'They captured the moments from our day so beautifully — the photos transported us back to the emotions we felt on our big day. The depth, drama, play of light and creativity were excellent. The whole team is passionate, warm and professional, and invests real time in understanding the couple. You can trust them completely. Wishing them all the very best!',
  },
  {
    couple: 'Vivaan & Mira',
    img: '/images/couple-7.jpg',
    quote:
      'The team captured our special day flawlessly! From the moment we met, their professionalism and passion for photography were evident. The photos they delivered were nothing short of breathtaking — they perfectly captured the joy, love and emotion of our wedding day. Highly recommended.',
  },
  {
    couple: 'Rohan & Sara',
    img: '/images/couple-10.jpg',
    quote:
      'We absolutely loved working with this team! They captured every special moment beautifully, and made us feel so comfortable and at ease throughout the day. The photos are stunning, full of emotion, and truly tell the story of our day.',
  },
]

export default function Testimonials() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="tm section">
      <div className="container tm__inner">
        <header className="tm__head">
          <span className="eyebrow tm__eyebrow" data-reveal>&mdash;&nbsp; Kind Words</span>
          <h2 className="tm__title" data-reveal data-reveal-delay="1">
            Loved by our <em>couples</em>
          </h2>
        </header>

        <Swiper
          className="tm__swiper"
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          autoHeight
          loop
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          pagination={{
            type: 'fraction',
            el: '.tm__fraction',
            formatFractionCurrent: (n) => (n < 10 ? `0${n}` : n),
            formatFractionTotal: (n) => (n < 10 ? `0${n}` : n),
          }}
        >
          {ITEMS.map((t) => (
            <SwiperSlide key={t.couple}>
              <div className="tm__card">
                <figure className="tm__photo">
                  <img src={t.img} alt={`${t.couple} — couple session`} loading="lazy" />
                </figure>
                <blockquote className="tm__quote">
                  <span className="tm__mark" aria-hidden>“</span>
                  <p className="tm__text">{t.quote}</p>
                  <footer className="tm__by">
                    <span className="tm__name">{t.couple}</span>
                    <span className="tm__role">Couple</span>
                  </footer>
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="tm__controls">
          <button ref={prevRef} className="tm__arrow" aria-label="Previous testimonial">
            <svg viewBox="0 0 40 12" width="40" height="12"><path d="M40 6H1M6 1 1 6l5 5" fill="none" stroke="currentColor" /></svg>
          </button>
          <span className="tm__fraction" />
          <button ref={nextRef} className="tm__arrow" aria-label="Next testimonial">
            <svg viewBox="0 0 40 12" width="40" height="12"><path d="M0 6h39m-5-5 5 5-5 5" fill="none" stroke="currentColor" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
