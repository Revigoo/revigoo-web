import { ArrowUpRight, Check } from 'lucide-react'
import './AboutSection.css'

interface AboutSectionProps {
  onLearnMore?: () => void
}

export default function AboutSection({
  onLearnMore,
}: AboutSectionProps) {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* TOP LABEL */}
        <div className="about-top">
          <span className="about-kicker">ABOUT REVIGOO</span>

          <span className="about-top-line">
            <span />
            RIDE EASY. WE CARE.
          </span>
        </div>

        {/* MAIN INTRO */}
        <div className="about-intro">

          <h2 className="about-title">
            A better way to
            <br />
            <span>take care of your bike.</span>
          </h2>

          <div className="about-intro-text">
            <p>
              Your bike is more than just a machine.
              It gets you to work, takes you places,
              and becomes part of your everyday life.
            </p>

            <p>
              REVIGOO is building a simpler way to manage
              motorcycle servicing by connecting riders with
              trusted service partners through one seamless
              experience.
            </p>
          </div>

        </div>

        {/* IMAGE + STORY */}
        <div className="about-story">

          <div className="about-image-wrap">
            <div className="about-image" />

            <div className="about-image-label">
              <span className="about-image-number">01</span>

              <div>
                <strong>Care in every ride.</strong>
                <span>Service made simpler.</span>
              </div>
            </div>
          </div>

          <div className="about-story-content">

            <span className="about-small-label">
              WHY US..
            </span>

            <h3>
              Less hassle.
              <br />
              More riding.
            </h3>

            <p>
              Finding the right garage, understanding what your
              bike needs, and keeping track of servicing shouldn't
              feel complicated.
            </p>

            <p>
              REVIGOO brings these experiences together with a
              rider-first approach — helping make motorcycle
              servicing more convenient, transparent and connected.
            </p>

            <button
              className="about-button"
              onClick={onLearnMore}
            >
              Discover REVIGOO
              <ArrowUpRight size={18} strokeWidth={2} />
            </button>

          </div>

        </div>

        {/* PRINCIPLES */}
        <div className="about-principles">

          <div className="about-principles-heading">
            <span>WHAT DRIVES US</span>
            <p>
              Everything we build starts with a simple idea:
              make bike service better for everyone involved.
            </p>
          </div>

          <div className="about-principles-list">

            <div className="about-principle">
              <div className="about-principle-icon">
                <Check size={15} />
              </div>

              <div>
                <h4>Rider First</h4>
                <p>
                  Designed around the needs of motorcycle owners.
                </p>
              </div>
            </div>

            <div className="about-principle">
              <div className="about-principle-icon">
                <Check size={15} />
              </div>

              <div>
                <h4>Trusted Service</h4>
                <p>
                  Connecting riders with service partners.
                </p>
              </div>
            </div>

            <div className="about-principle">
              <div className="about-principle-icon">
                <Check size={15} />
              </div>

              <div>
                <h4>Simple Experience</h4>
                <p>
                  Removing unnecessary friction from servicing.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}