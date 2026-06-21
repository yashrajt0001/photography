import useReveal from '../lib/useReveal.js'
import Hero from '../components/Hero.jsx'
import Quote from '../components/Quote.jsx'
import Gallery from '../components/Gallery.jsx'
import Intro from '../components/Intro.jsx'
import FeaturedWeddings from '../components/FeaturedWeddings.jsx'
import Testimonials from '../components/Testimonials.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import InstagramFeed from '../components/InstagramFeed.jsx'

export default function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <Gallery />
      <Quote />
      <Intro />
      <FeaturedWeddings />
      <Testimonials />
      <GetInTouch />
      <InstagramFeed />
    </>
  )
}
