import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import './Hero.css'

const SLIDES = [
  { src: '/images/hero-1.jpg', alt: 'Wedding photography by The Photo Store' },
  { src: '/images/hero-2.jpg', alt: 'Candid wedding moment' },
  { src: '/images/hero-3.jpg', alt: 'Bride portrait' },
  { src: '/images/hero-4.jpg', alt: 'Couple at golden hour' },
  { src: '/images/hero-5.jpg', alt: 'Wedding celebration' },
]

export default function Hero() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="hero">
      <Swiper
        className="hero__swiper"
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1300}
        loop
        grabCursor
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
      >
        {SLIDES.map((s) => (
          <SwiperSlide key={s.src}>
            <div className="hero__slide">
              <img src={s.src} alt={s.alt} />
              <div className="hero__tint" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero__scrim" />

      <button ref={prevRef} className="hero__arrow hero__arrow--prev" aria-label="Previous slide">
        <svg viewBox="0 0 30 12" width="34" height="13"><path d="M30 6H1M6 1 1 6l5 5" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
      </button>
      <button ref={nextRef} className="hero__arrow hero__arrow--next" aria-label="Next slide">
        <svg viewBox="0 0 30 12" width="34" height="13"><path d="M0 6h29m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
      </button>

      <div className="hero__caption">
        <span className="hero__eyebrow">Mumbai &middot; Weddings &amp; Films</span>
        <h1 className="hero__title">
          Moments,<br />beautifully <em>told</em>.
        </h1>
      </div>

    </section>
  )
}
