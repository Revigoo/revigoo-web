import {
  ArrowRight,
  BatteryCharging,
  CircleGauge,
  Droplets,
  Search,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import './ServicesSection.css'

interface ServicesSectionProps {
  onBookService?: () => void
  onViewServices?: () => void
}

const services = [
  {
    number: '01',
    title: 'General Service',
    description:
      'Routine maintenance to keep your motorcycle performing smoothly.',
    icon: Wrench,
  },
  {
    number: '02',
    title: 'Oil & Filter',
    description:
      'Engine oil and filter replacement for regular maintenance.',
    icon: Droplets,
  },
  {
    number: '03',
    title: 'Brake Service',
    description:
      'Inspection and maintenance of your braking system.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Tyres & Wheels',
    description:
      'Tyre checks, wheel inspection and related maintenance.',
    icon: CircleGauge,
  },
  {
    number: '05',
    title: 'Battery & Electrical',
    description:
      'Battery, lighting and essential electrical service.',
    icon: BatteryCharging,
  },
  {
    number: '06',
    title: 'Repairs & Diagnostics',
    description:
      'Identify and address mechanical and service issues.',
    icon: Search,
  },
]

export default function ServicesSection({
  onBookService,
  onViewServices,
}: ServicesSectionProps) {
  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* TOP LABEL */}
        <div className="services-top">
          <div className="services-kicker">
            <span />
            OUR SERVICES
          </div>

          <div className="services-counter">
            05 / 08
          </div>
        </div>

        {/* HERO */}
        <div className="services-hero">

          {/* LEFT */}
          <div className="services-copy">

            <h2 className="services-title">
              Everything
              <br />
              <span>your bike needs.</span>
            </h2>

            <p className="services-description">
              From regular maintenance to repairs, REVIGOO
              connects you with service partners for the
              essential care your motorcycle needs.
            </p>

            <button
              className="services-primary-button"
              onClick={onBookService}
            >
              <span>Book a Service</span>
              <ArrowRight size={19} />
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="services-visual">

            <div className="services-image" />

            <div className="services-image-gradient" />

            <div className="services-image-card">
              <span>CARE / 01</span>
              <strong>Built around your ride.</strong>
            </div>

          </div>

        </div>

        {/* SERVICES */}
        <div className="services-grid">

          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                className="service-card"
                key={service.number}
              >

                <div className="service-card-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="service-card-number">
                  {service.number}
                </div>

                <div className="service-card-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>

                <div className="service-card-arrow">
                  <ArrowRight
                    size={19}
                    strokeWidth={1.7}
                  />
                </div>

              </div>
            )
          })}

        </div>

        {/* FOOTER */}
        <div className="services-footer">

          <div className="services-footer-brand">
            <span>YOUR BIKE.</span>
            <span>OUR CARE.</span>
            <strong>YOUR RIDE.</strong>
          </div>

         

        </div>

      </div>

    </section>
  )
}