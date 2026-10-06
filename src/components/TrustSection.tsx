import {
  ArrowUpRight,
  BadgeCheck,
  FileCheck2,
  ShieldCheck,
  History,
} from 'lucide-react'
import './TrustSection.css'

const trustPoints = [
  {
    number: '01',
    title: 'Trusted Partners',
    description:
      'REVIGOO is building a network of service partners through a structured onboarding process.',
    icon: BadgeCheck,
  },
  {
    number: '02',
    title: 'Clear Quotations',
    description:
      'Understand the recommended work and estimated cost before deciding what happens next.',
    icon: FileCheck2,
  },
  {
    number: '03',
    title: 'Customer Approval',
    description:
      'You stay in control of the service journey and approve recommended work before it begins.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Service History',
    description:
      'Keep your motorcycle service journey connected and easier to understand over time.',
    icon: History,
  },
]

export default function TrustSection() {
  return (
    <section className="trust-section" id="trust">
      <div className="trust-container">

        {/* HEADER */}
        <div className="trust-header">
          <div className="trust-kicker">
            <span />
            TRUST, BY DESIGN
          </div>

          <div className="trust-header-note">
            BUILT AROUND RIDERS
          </div>
        </div>

        {/* INTRO */}
        <div className="trust-intro">
          <h2 className="trust-title">
            Better service starts
            <br />
            <span>with better confidence.</span>
          </h2>

          <p className="trust-description">
            Taking care of your bike should feel simple, clear and
            dependable. REVIGOO is designed to bring more confidence
            into every stage of the service journey.
          </p>
        </div>

        {/* TRUST GRID */}
        <div className="trust-grid">
          {trustPoints.map((point) => {
            const Icon = point.icon

            return (
              <article
                className="trust-card"
                key={point.number}
              >
                <div className="trust-card-top">
                  <span className="trust-number">
                    {point.number}
                  </span>

                  <div className="trust-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                    />
                  </div>

                  <ArrowUpRight
                    className="trust-arrow"
                    size={19}
                    strokeWidth={1.6}
                  />
                </div>

                <div className="trust-card-content">
                  <h3>{point.title}</h3>

                  <p>{point.description}</p>
                </div>
              </article>
            )
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="trust-bottom">
          <div className="trust-bottom-line" />

          <p>
            <span>THE REVIGOO PRINCIPLE</span>
            <strong>
              Your bike deserves care you can feel confident about.
            </strong>
          </p>
        </div>

      </div>
    </section>
  )
}