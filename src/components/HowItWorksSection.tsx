import {
  ArrowRight,
  ClipboardList,
  Search,
  FileText,
  CheckCircle2,
  Wrench,
  ShieldCheck,
  Bike,
} from 'lucide-react'
import './HowItWorksSection.css'

interface HowItWorksSectionProps {
  onBookService?: () => void
}

const steps = [
  {
    number: '01',
    title: 'Tell us what your bike needs',
    description:
      'Raise a service request and share the details of your motorcycle and what it needs.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Connect with a service partner',
    description:
      'REVIGOO matches your request with a suitable service partner based on your requirements.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Get your bike inspected',
    description:
      'The service partner checks your motorcycle and identifies the work required.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Review the quotation',
    description:
      'Understand the recommended work and estimated cost before anything moves forward.',
    icon: FileText,
  },
  {
    number: '05',
    title: 'Approve the service',
    description:
      'You stay in control and approve the recommended work before service begins.',
    icon: CheckCircle2,
  },
  {
    number: '06',
    title: 'Your bike gets serviced',
    description:
      'The approved service work is carried out by the service partner.',
    icon: Wrench,
  },
  {
    number: '07',
    title: 'Quality check',
    description:
      'The completed work is reviewed before your motorcycle is marked ready.',
    icon: ShieldCheck,
  },
  {
    number: '08',
    title: 'Ride again',
    description:
      'Your service journey is complete and your bike is ready for the road.',
    icon: Bike,
  },
]

export default function HowItWorksSection({
  onBookService,
}: HowItWorksSectionProps) {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        {/* HEADER */}
        <div className="how-header">
          <div className="how-kicker">
            <span />
            HOW REVIGOO WORKS
          </div>

          <div className="how-header-note">
            SIMPLE BY DESIGN
          </div>
        </div>

        {/* INTRO */}
        <div className="how-intro">
          <h2 className="how-title">
            From service request
            <br />
            <span>to ride-ready.</span>
          </h2>

          <p className="how-description">
            REVIGOO brings every important step of your motorcycle
            service journey together in one connected experience.
          </p>
        </div>

        {/* JOURNEY */}
        <div className="how-journey">

          <div className="how-line" />

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                className="how-step"
                key={step.number}
              >
                <div className="how-step-top">

                  <span className="how-step-number">
                    {step.number}
                  </span>

                  <div className="how-step-icon">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                    />
                  </div>

                </div>

                <div className="how-step-content">

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>
              </article>
            )
          })}

        </div>

        {/* BOTTOM CTA */}
        <div className="how-bottom">

          <div className="how-bottom-copy">
            <span>READY WHEN YOU ARE.</span>

            <strong>
              Get your next service started.
            </strong>
          </div>

          <button
            type="button"
            className="how-button"
            onClick={onBookService}
          >
            Book a Service
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  )
}