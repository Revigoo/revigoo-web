import { useState } from 'react'

import Navbar from './components/Navbar'

import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import RiderSection from './components/RiderSection'
import GarageSection from './components/GarageSection'
import ServicesSection from './components/ServicesSection'
import HowItWorksSection from './components/HowItWorksSection'
import TrustSection from './components/TrustSection'
import ForEveryRideSection from './components/ForEveryRideSection'
import FaqSection from './components/FaqSection'
import WhyRevigooSection from './components/WhyRevigooSection'
import FinalCtaSection from './components/FinalCtaSection'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'

import PartnerModal from './components/PartnerModal'

function App() {
  const [partnerOpen, setPartnerOpen] = useState(false)


  const handleBackHome = () => {
    window.history.pushState({}, '', '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
 }

  /* BOOKING */

  const handleBookService = () => {
    window.open(
      'https://revigoo.github.io/revigoo-service-booking/',
      '_blank',
      'noopener,noreferrer'
    )
  }

  /* GARAGE PARTNER */

  const handleBecomePartner = () => {
    setPartnerOpen(true)
  }

  /* FIND GARAGE */

  const handleFindGarage = () => {
    const garages = document.getElementById('garages')

    garages?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  /* VIEW SERVICES */

  const handleViewServices = () => {
    const services = document.getElementById('services')

    services?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  /* DISCOVER REVIGOO */

  const handleDiscover = () => {
    const about = document.getElementById('about')

    about?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleHeroBookService = () => {
  const riders = document.getElementById('riders')

  riders?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
  
}

  return (
    <>

      <PageLoader />
      {/* NAVBAR */}

      <Navbar
        onBookService={handleBookService}
      />


      {/* HERO */}

      <Hero
        onBookService={handleHeroBookService}
        onFindGarage={handleFindGarage}
      />

      {/* ABOUT */}

      <AboutSection
        onLearnMore={handleDiscover}
      />


      {/* RIDERS */}

      <RiderSection
        onBookService={handleBookService}
      />


      {/* GARAGES */}

      <GarageSection
        onBecomePartner={handleBecomePartner}
      />


      {/* SERVICES */}

      <ServicesSection
        onBookService={handleBookService}
        onViewServices={handleViewServices}
      />


      {/* HOW IT WORKS */}

      <HowItWorksSection
        onBookService={handleBookService}
      />

      <TrustSection />

      <ForEveryRideSection />

      {/* WHY REVIGOO */}

      <WhyRevigooSection
        onLearnMore={handleDiscover}
      />
      <FaqSection />


      {/* FINAL CTA */}

      <FinalCtaSection
        onBookService={handleBookService}
        onBecomePartner={handleBecomePartner}
      />


      {/* FOOTER */}

      <Footer />


      {/* GARAGE PARTNER MODAL */}

      <PartnerModal
        open={partnerOpen}
        onClose={() => setPartnerOpen(false)}
      />
    </>
  )
}

export default App