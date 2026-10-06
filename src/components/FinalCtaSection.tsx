import { ArrowRight, ArrowUpRight } from 'lucide-react'
import './FinalCtaSection.css'

interface FinalCtaSectionProps {
  onBookService?: () => void
  onBecomePartner?: () => void
}

export default function FinalCtaSection({
  onBookService,
  onBecomePartner,
}: FinalCtaSectionProps) {
  return (
    <section
        className="final-cta-section"
        id="contact"
        >

      <div className="final-cta-container">

        {/* TOP LABEL */}
        <div className="final-cta-top">

          <span className="final-cta-kicker">
            READY TO RIDE?
          </span>

          <span className="final-cta-line" />

        </div>

        {/* MAIN */}
        <div className="final-cta-main">

          <h2 className="final-cta-title">
            Your bike deserves
            <br />
            <span>better care.</span>
          </h2>

          <p className="final-cta-description">
            Whether you're looking for a better way to
            service your bike or ready to grow your garage
            with REVIGOO, we're building the network for it.
          </p>

        </div>

        {/* ACTIONS */}
        <div className="final-cta-actions">

          <button
            className="final-cta-button final-cta-primary"
            onClick={onBookService}
          >
            Book a Service
            <ArrowRight size={19} />
          </button>

          <button
            className="final-cta-button final-cta-secondary"
            onClick={onBecomePartner}
          >
            Become a Partner
            <ArrowUpRight size={19} />
          </button>

        </div>

        {/* BRAND */}
        <div className="final-cta-brand">

          <div className="final-cta-brand-name">
            RE<span>V</span>IGOO
          </div>

          <div className="final-cta-tagline">
            RIDE EASY. WE CARE.
          </div>

        </div>

      </div>

    </section>
  )
}