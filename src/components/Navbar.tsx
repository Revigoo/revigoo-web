import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import './Navbar.css'

interface NavbarProps {
  onBookService?: () => void
}

export default function Navbar({
  onBookService,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    closeMenu()

    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

 const scrollToContact = () => {
  closeMenu()

  const contact = document.getElementById('contact')

  if (contact) {
    contact.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

  return (
    <header
      className={`navbar ${
        scrolled ? 'navbar-scrolled' : ''
      } ${menuOpen ? 'navbar-open' : ''}`}
    >
      <div className="navbar-container">

        {/* LOGO */}

        <button
          className="navbar-logo"
          onClick={() => scrollToSection('home')}
        >
          RE<span>V</span>IGOO
        </button>


        {/* DESKTOP NAVIGATION */}

        <nav className="navbar-links">

          <button onClick={() => scrollToSection('home')}>
            Home
          </button>

          <button onClick={() => scrollToSection('services')}>
            Services
          </button>

          <button onClick={() => scrollToSection('riders')}>
            For Riders
          </button>

          <button onClick={() => scrollToSection('garages')}>
            For Garages
          </button>

          <button onClick={() => scrollToSection('about')}>
            About
          </button>

         <button onClick={scrollToContact}>
  Contact
</button>

        </nav>


        {/* BOOK CTA */}

       

        {/* MOBILE MENU */}

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>


      {/* MOBILE NAVIGATION */}

      <div className="navbar-mobile">

        <button onClick={() => scrollToSection('home')}>
          Home
        </button>

        <button onClick={() => scrollToSection('services')}>
          Services
        </button>

        <button onClick={() => scrollToSection('riders')}>
          For Riders
        </button>

        <button onClick={() => scrollToSection('garages')}>
          For Garages
        </button>

        <button onClick={() => scrollToSection('about')}>
          About
        </button>

        <button onClick={scrollToContact}>
  Contact
</button>

        <button
          className="navbar-mobile-cta"
          onClick={onBookService}
        >
          <span>Book a Service</span>
          <ArrowRight size={17} />
        </button>

      </div>

    </header>
  )
}