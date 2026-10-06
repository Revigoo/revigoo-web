import { ArrowRight, BadgeCheck, MapPin, Wrench } from 'lucide-react'

import './Hero.css'

interface HeroProps {
  onBookService?: () => void
  onFindGarage?: () => void
}

export default function Hero({
  onBookService,
  onFindGarage,
}: HeroProps) {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-background" />

      {/* Dark cinematic overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">

          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span>BIKE SERVICE, REIMAGINED</span>
          </div>

          {/* Main heading */}
          <h1 className="hero-title">
            Ride Easy.
            <span>We Care.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Your bike. Our network.
            <br className="desktop-break" />
            A smoother way to get your bike serviced.
          </p>

          {/* CTA buttons */}
          <div className="hero-actions">

            <button
              className="hero-button hero-button-primary"
              onClick={onBookService}
            >
              Book a Service
              <ArrowRight size={18} strokeWidth={2} />
            </button>

            <button
              className="hero-button hero-button-secondary"
              onClick={onFindGarage}
            >
              <MapPin size={17} />
              Become a Partner Garage
            </button>

          </div>

          {/* Trust indicators */}
          <div className="hero-trust">

            <div className="hero-trust-item">
              <div className="hero-trust-icon">
                <BadgeCheck size={18} />
              </div>

              <div>
                <strong>Trusted Garages</strong>
                <span>Quality service</span>
              </div>
            </div>

            <div className="hero-trust-divider" />

            <div className="hero-trust-item">
              <div className="hero-trust-icon">
                <Wrench size={18} />
              </div>

              <div>
                <strong>Professional Care</strong>
                <span>Service-first approach</span>
              </div>
            </div>

            <div className="hero-trust-divider" />

            <div className="hero-trust-item">
              <div className="hero-trust-icon">
                <MapPin size={18} />
              </div>

              <div>
                <strong>Convenient</strong>
                <span>Built around riders</span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <span className="hero-scroll-line" />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  )
}