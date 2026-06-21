# The Photo Store — website

Faithful rebuild of [thephotostore.in](https://www.thephotostore.in/) as a clean
React + Vite app (the original is a Pixieset-generated site). Same look, motion and
content, but hand-built so it's editable and host-anywhere.

## Stack
- **React 18 + Vite** (no CMS lock-in)
- **Lenis** — smooth scroll
- **Swiper** — hero slideshow + testimonial carousel
- **IntersectionObserver** — scroll reveals
- Fonts: **Fraunces** (≈ Freight Big Pro) + **Montserrat** (≈ Sofia Pro) via Google Fonts

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs static site to /dist
npm run preview  # preview the production build
```

## Structure
```
src/
  App.jsx              router + Lenis smooth scroll
  components/          Header, Hero, Quote, Intro, FeaturedWeddings,
                       Testimonials, GetInTouch, InstagramFeed, Footer
  pages/               Home, Placeholder (Wedding/Films/About/Contact)
  lib/                 nav.js (menu/socials/contact), useReveal.js (scroll reveals)
public/images/         photography (real images pulled from the original)
```

## Status
**Homepage is complete** — hero fade-slider, fullscreen overlay menu, scroll reveals,
testimonial carousel, parallax CTA, Instagram grid, footer.
The other pages (Wedding gallery, Films, About Us, Contact) currently render a styled
"coming soon" placeholder and are the next build phase. The navbar shows inline links on
desktop (≥992px) and switches to a hamburger + fullscreen overlay menu on smaller screens.

## Notes for handoff
- Replace `public/images/*` with final high-res exports; filenames are referenced in the
  component files (e.g. `hero-1.jpg`, `featured-harshita.jpg`).
- Menu, socials and the StudioNinja contact-form link live in `src/lib/nav.js`.
- `public/_redirects` enables SPA routing on Netlify; for other hosts add an
  equivalent "rewrite all to /index.html" rule.
- `_reference/` holds the archived source HTML and capture script — not shipped.
