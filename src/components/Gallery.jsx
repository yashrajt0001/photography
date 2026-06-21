import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard, Zoom } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/zoom'
import './Gallery.css'

const IMAGES = [
  { src: '/images/g2.jpg', alt: 'Wedding moment' },
  { src: '/images/couple-2.jpg', alt: 'Couple portrait' },
  { src: '/images/g6.jpg', alt: 'Bride getting ready' },
  { src: '/images/intro-1.jpg', alt: 'Wedding celebration' },
  { src: '/images/g8.jpg', alt: 'Candid wedding moment' },
  { src: '/images/couple-5.jpg', alt: 'Pre-wedding session' },
  { src: '/images/g3.jpg', alt: 'Bridal details' },
  { src: '/images/couple-9.jpg', alt: 'Couple at golden hour' },
  { src: '/images/g10.jpg', alt: 'Wedding ceremony' },
  { src: '/images/intro-3.jpg', alt: 'Family celebration' },
  { src: '/images/g11.jpg', alt: 'Reception moment' },
  { src: '/images/couple-12.jpg', alt: 'Romantic portrait' },
  { src: '/images/g4.jpg', alt: 'Wedding rituals' },
  { src: '/images/couple-6.jpg', alt: 'Couple walking' },
  { src: '/images/g12.jpg', alt: 'Joyful wedding moment' },
  { src: '/images/intro-5.jpg', alt: 'Grand celebration' },
]

export default function Gallery() {
  const [index, setIndex] = useState(null) // null = closed
  const [current, setCurrent] = useState(0)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const open = index !== null

  // lock scroll + Esc to close while lightbox open
  useEffect(() => {
    if (!open) return
    window.__lenis?.stop()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.__lenis?.start()
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const openAt = (i) => {
    setCurrent(i)
    setIndex(i)
  }

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <header className="gallery__head">
          <span className="eyebrow" data-reveal>&mdash;&nbsp; The Gallery</span>
          <h2 className="gallery__title" data-reveal data-reveal-delay="1">
            Moments we&rsquo;ve <em>captured</em>
          </h2>
        </header>

        <div className="gallery__grid">
          {IMAGES.map((im, i) => (
            <button
              key={im.src}
              className="gallery__item img-reveal"
              data-reveal-delay={(i % 4) + 1}
              onClick={() => openAt(i)}
              aria-label={`Open image ${i + 1}: ${im.alt}`}
            >
              <img src={im.src} alt={im.alt} loading="lazy" />
              <span className="gallery__plus" aria-hidden>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image gallery">
          <div className="lightbox__backdrop" onClick={() => setIndex(null)} />

          <button className="lightbox__close" onClick={() => setIndex(null)} aria-label="Close gallery">
            <span /><span />
          </button>

          <div className="lightbox__counter">
            <span>{String(current + 1).padStart(2, '0')}</span>
            <i>/</i>
            <span>{String(IMAGES.length).padStart(2, '0')}</span>
          </div>

          <button ref={prevRef} className="lightbox__arrow lightbox__arrow--prev" aria-label="Previous image">
            <svg viewBox="0 0 40 14" width="42" height="15"><path d="M40 7H1M7 1 1 7l6 6" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
          </button>
          <button ref={nextRef} className="lightbox__arrow lightbox__arrow--next" aria-label="Next image">
            <svg viewBox="0 0 40 14" width="42" height="15"><path d="M0 7h39m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
          </button>

          <Swiper
            className="lightbox__swiper"
            modules={[Navigation, Keyboard, Zoom]}
            initialSlide={index}
            loop
            speed={500}
            zoom={{ maxRatio: 3 }}
            keyboard={{ enabled: true, onlyInViewport: false }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            onSlideChange={(s) => setCurrent(s.realIndex)}
          >
            {IMAGES.map((im) => (
              <SwiperSlide key={im.src}>
                <div className="swiper-zoom-container lightbox__figure">
                  <img src={im.src} alt={im.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <span className="lightbox__hint">Swipe, use the arrows, or your ← → keys</span>
        </div>
      )}
    </section>
  )
}
