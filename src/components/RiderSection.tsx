import {
  ArrowRight,
  CalendarCheck,
  Check,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import './RiderSection.css'

interface RiderSectionProps {
  onBookService?: () => void
}

export default function RiderSection({
  onBookService,
}: RiderSectionProps) {
  return (
    <section className="rider-section" id="riders">
      <div className="rider-container">

        {/* HEADER */}
        <div className="rider-header">

          <div className="rider-kicker">
            <span />
            FOR RIDERS
          </div>

          <div className="rider-header-note">
            SERVICE SHOULD BE SIMPLE.
          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="rider-main">

          {/* LEFT CONTENT */}
          <div className="rider-content">

            <h2 className="rider-title">
              Your bike
              <br />
              <span>deserves better.</span>
            </h2>

            <p className="rider-description">
              Your time matters. REVIGOO makes it easier to
              find service, connect with the right garage and
              keep your bike running the way it should.
            </p>

            <button
              className="rider-button"
              onClick={onBookService}
            >
              Book a Service
              <ArrowRight size={18} />
            </button>

          </div>

          {/* IMAGE */}
          <div className="rider-visual">

            <div className="rider-image" />

            <div className="rider-image-overlay" />

            <div className="rider-image-caption">
              <span>02</span>

              <div>
                <strong>Built around you.</strong>
                <small>
                  A simpler service experience.
                </small>
              </div>
            </div>

          </div>

        </div>

        {/* BENEFITS */}
        <div className="rider-benefits">

          <div className="rider-benefits-heading">
            <span>THE RIDER EXPERIENCE</span>

            <p>
              Everything you need to make bike servicing
              feel less complicated.
            </p>
          </div>

          <div className="rider-benefits-grid">

            <div className="rider-benefit">
              <div className="rider-benefit-icon">
                <Wrench size={19} />
              </div>

              <div>
                <h3>Find Service</h3>

                <p>
                  Discover service partners for your
                  motorcycle service needs.
                </p>
              </div>
            </div>

            <div className="rider-benefit">
              <div className="rider-benefit-icon">
                <CalendarCheck size={19} />
              </div>

              <div>
                <h3>Book Easily</h3>

                <p>
                  Make your service request without
                  unnecessary steps.
                </p>
              </div>
            </div>

            <div className="rider-benefit">
              <div className="rider-benefit-icon">
                <ShieldCheck size={19} />
              </div>

              <div>
                <h3>Service With Confidence</h3>

                <p>
                  A service experience designed around
                  transparency and convenience.
                </p>
              </div>
            </div>

            <div className="rider-benefit">
              <div className="rider-benefit-icon">
                <Check size={19} />
              </div>

              <div>
                <h3>Keep Riding</h3>

                <p>
                  Spend less time worrying about servicing
                  and more time on the road.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}