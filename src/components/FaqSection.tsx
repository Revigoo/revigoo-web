import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './FaqSection.css'

const faqs = [
  {
    question: 'What is REVIGOO?',
    answer:
      'REVIGOO is a motorcycle service platform designed to connect riders with suitable service partners through a simpler and more convenient service experience.',
  },
  {
    question: 'How do I book a service?',
    answer:
      'Click “Book a Service” and provide your motorcycle and service requirements through the booking process.',
  },
  {
    question: 'Can I choose my garage?',
    answer:
      'REVIGOO is designed to connect riders with suitable service partners based on their location and service requirements.',
  },
  {
    question: 'How does REVIGOO select service partners?',
    answer:
      'Garage partners go through a structured onboarding process before becoming part of the REVIGOO network.',
  },
  {
    question: 'Do I approve the service before work begins?',
    answer:
      'REVIGOO’s service journey is designed to give riders visibility into recommended work and keep them involved before service proceeds.',
  },
  {
    question: 'How can my garage join REVIGOO?',
    answer:
      'Click “Become a Partner”, submit your garage details, and the REVIGOO team will review your application and contact you.',
  },
]

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActive((current) => (current === index ? null : index))
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header">
          <div className="faq-kicker">
            <span />
            FAQ
          </div>

          <div className="faq-header-note">
            NEED TO KNOW
          </div>
        </div>

        {/* INTRO */}
        <div className="faq-intro">
          <h2 className="faq-title">
            Questions?
            <br />
            <span>We have answers.</span>
          </h2>

          <p className="faq-description">
            Everything you need to know about REVIGOO,
            the service journey and becoming part of our network.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = active === index

            return (
              <div
                className={`faq-item ${
                  isActive ? 'faq-item-active' : ''
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isActive}
                >
                  <span className="faq-question-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="faq-question-text">
                    {faq.question}
                  </span>

                  <span className="faq-icon">
                    <ChevronDown
                      size={19}
                      strokeWidth={1.7}
                    />
                  </span>
                </button>

                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* BOTTOM */}
        <div className="faq-bottom">
          <span>STILL HAVE QUESTIONS?</span>

          <strong>
            We're building REVIGOO around riders.
          </strong>
        </div>

      </div>
    </section>
  )
}