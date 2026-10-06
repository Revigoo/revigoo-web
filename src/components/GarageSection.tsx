import {
  ArrowUpRight,
  BarChart3,
  Handshake,
  Users,
  Wrench,
} from 'lucide-react'
import './GarageSection.css'

interface GarageSectionProps {
  onBecomePartner?: () => void
}

export default function GarageSection({
  onBecomePartner,
}: GarageSectionProps) {
  return (
    <section className="garage-section" id="garages">
      <div className="garage-container">

        {/* HEADER */}
        <div className="garage-header">

          <div className="garage-kicker">
            <span />
            FOR GARAGE PARTNERS
          </div>

          <div className="garage-header-note">
            BUILT FOR BETTER SERVICE
          </div>

        </div>

        {/* MAIN */}
        <div className="garage-main">

          {/* IMAGE */}
          <div className="garage-visual">

            <div className="garage-image" />

            <div className="garage-image-overlay" />

            <div className="garage-image-label">
              <span>03</span>

              <div>
                <strong>Built together.</strong>
                <small>
                  Growing the service network.
                </small>
              </div>
            </div>

          </div>

          {/* CONTENT */}
          <div className="garage-content">

            <h2 className="garage-title">
              Grow your
              <br />
              <span>garage with REVIGOO.</span>
            </h2>

            <p className="garage-description">
              REVIGOO connects motorcycle owners with service
              partners through a modern, rider-focused platform.
            </p>

            <p className="garage-description">
              Become part of a growing network designed to help
              garages reach riders, receive service opportunities
              and build stronger customer relationships.
            </p>

            <button
              className="garage-button"
              onClick={onBecomePartner}
            >
              Become a Partner
              <ArrowUpRight size={18} />
            </button>

          </div>

        </div>

        {/* BENEFITS */}
        <div className="garage-benefits">

          <div className="garage-benefits-heading">

            <span>WHY PARTNER WITH REVIGOO</span>

            <p>
              A platform designed to connect garages
              with riders and simplify the service journey.
            </p>

          </div>

          <div className="garage-benefits-grid">

            <div className="garage-benefit">

              <div className="garage-benefit-icon">
                <Users size={19} />
              </div>

              <div>
                <h3>Reach More Riders</h3>

                <p>
                  Connect your garage with motorcycle
                  owners looking for service.
                </p>
              </div>

            </div>

            <div className="garage-benefit">

              <div className="garage-benefit-icon">
                <Handshake size={19} />
              </div>

              <div>
                <h3>Join the Network</h3>

                <p>
                  Become part of the REVIGOO service
                  partner ecosystem.
                </p>
              </div>

            </div>

            <div className="garage-benefit">

              <div className="garage-benefit-icon">
                <Wrench size={19} />
              </div>

              <div>
                <h3>Showcase Your Service</h3>

                <p>
                  Present your garage and the services
                  you provide to potential customers.
                </p>
              </div>

            </div>

            <div className="garage-benefit">

              <div className="garage-benefit-icon">
                <BarChart3 size={19} />
              </div>

              <div>
                <h3>Build Your Business</h3>

                <p>
                  Create opportunities to develop
                  stronger customer relationships.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="garage-bottom">

          <span>
            YOUR EXPERTISE.
          </span>

          <strong>
            OUR NETWORK.
          </strong>

          <span>
            BETTER CONNECTIONS.
          </span>

        </div>

      </div>
    </section>
  )
}