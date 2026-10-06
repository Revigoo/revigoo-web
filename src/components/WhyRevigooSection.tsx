import {
  ArrowUpRight,
  Eye,
  Handshake,
  Sparkles,
  Zap,
} from 'lucide-react'
import './WhyRevigooSection.css'

interface WhyRevigooSectionProps {
  onLearnMore?: () => void
}

const reasons = [
  {
    number: '01',
    title: 'Convenience',
    description:
      'A simpler way to discover and arrange motorcycle service.',
    icon: Zap,
  },
  {
    number: '02',
    title: 'Transparency',
    description:
      'A service experience designed to make things clearer.',
    icon: Eye,
  },
  {
    number: '03',
    title: 'Trusted Network',
    description:
      'Connecting riders with service partners through REVIGOO.',
    icon: Handshake,
  },
  {
    number: '04',
    title: 'Rider First',
    description:
      'Everything starts with making the rider experience better.',
    icon: Sparkles,
  },
]

export default function WhyRevigooSection({
  onLearnMore,
}: WhyRevigooSectionProps) {
  return (
    <section className="why-section" id="why-revigoo">
      <div className="why-container">

        {/* TOP */}
        <div className="why-top">

          <div className="why-kicker">
            <span />
            WHY REVIGOO
          </div>

          <div className="why-index">
            THE REVIGOO DIFFERENCE
          </div>

        </div>

        {/* INTRO */}
        <div className="why-intro">

          <h2 className="why-title">
            More than
            <br />
            <span>a service.</span>
          </h2>

          <div className="why-intro-right">

            <h3>
              A better experience.
            </h3>

            <p>
              Motorcycle servicing should not feel like a
              complicated task. REVIGOO is designed to make
              the journey simpler, clearer and more connected.
            </p>

          </div>

        </div>

        {/* REASONS */}
        <div className="why-grid">

          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <div
                className="why-card"
                key={reason.number}
              >

                <div className="why-card-top">

                  <span className="why-number">
                    {reason.number}
                  </span>

                  <div className="why-icon">
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                </div>

                <div className="why-card-content">

                  <h3>
                    {reason.title}
                  </h3>

                  <p>
                    {reason.description}
                  </p>

                </div>

                <div className="why-card-line" />

              </div>
            )
          })}

        </div>

        {/* STATEMENT */}
        <div className="why-statement">

          <div className="why-statement-line" />

          <p>
            We believe taking care of your bike
            should be as easy as riding it.
          </p>

          <button
            className="why-button"
            onClick={onLearnMore}
          >
            Discover REVIGOO
            <ArrowUpRight size={18} />
          </button>

        </div>

      </div>
    </section>
  )
}