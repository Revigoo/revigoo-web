import { useState } from 'react'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'
import './PartnerModal.css'

interface PartnerModalProps {
  open: boolean
  onClose: () => void
}

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxr-ftcQhNZkMfa4hD8G68w26reAcHA18Om6Sz9jhY7-EBljc5KE_LLB1Jmxwo-azI3Bw/exec'

export default function PartnerModal({
  open,
  onClose,
}: PartnerModalProps) {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  if (!open) return null

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    setSubmitting(true)
    setError('')

    const form = event.currentTarget

    const formData = new FormData(form)

    const garageName = String(
      formData.get('garageName') || ''
    ).trim()

    const ownerName = String(
      formData.get('ownerName') || ''
    ).trim()

    const phone = String(
      formData.get('phone') || ''
    ).trim()

    const location = String(
      formData.get('location') || ''
    ).trim()

    const years = String(
      formData.get('years') || ''
    ).trim()

    try {
      /*
       * Send form data as URL encoded data.
       * This matches e.parameter in Google Apps Script.
       */
      const params = new URLSearchParams()

      params.append('garageName', garageName)
      params.append('ownerName', ownerName)
      params.append('phone', phone)
      params.append('location', location)
      params.append('years', years)

      const response = await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: 'POST',
          body: params,
        }
      )

      if (!response.ok) {
        throw new Error(
          `Server returned ${response.status}`
        )
      }

      const result = await response.json()

      console.log(
        'Google Apps Script response:',
        result
      )

      if (!result.success) {
        throw new Error(
          result.message ||
            'Unable to submit application'
        )
      }

      // Successful submission
      setSubmitted(true)

      form.reset()

    } catch (error) {
      console.error(
        'Partner application error:',
        error
      )

      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      )

    } finally {
      setSubmitting(false)
    }
  }

  const handleClose = () => {
    if (submitting) return

    setSubmitted(false)
    setError('')
    onClose()
  }

  return (
    <div
      className="modal-overlay"
      onClick={handleClose}
    >
      <div
        className="partner-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {/* Close Button */}
        <button
          type="button"
          className="modal-close"
          onClick={handleClose}
          aria-label="Close partner form"
          disabled={submitting}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="partner-modal-header">
              <span>
                GARAGE PARTNERS
              </span>

              <h2>
                Grow with
                <br />
                <strong>REVIGOO.</strong>
              </h2>

              <p>
                Tell us about your garage and
                our team will get in touch with you.
              </p>
            </div>

            {/* Form */}
            <form
              className="partner-form"
              onSubmit={handleSubmit}
            >
              {/* Garage Name */}
              <div className="form-group">
                <label htmlFor="garageName">
                  Garage Name
                </label>

                <input
                  id="garageName"
                  type="text"
                  name="garageName"
                  placeholder="Enter garage name"
                  autoComplete="organization"
                  required
                  disabled={submitting}
                />
              </div>

              {/* Owner + Phone */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="ownerName">
                    Owner Name
                  </label>

                  <input
                    id="ownerName"
                    type="text"
                    name="ownerName"
                    placeholder="Owner name"
                    autoComplete="name"
                    required
                    disabled={submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="10-digit number"
                    inputMode="numeric"
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    disabled={submitting}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="form-group">
                <label htmlFor="location">
                  Location
                </label>

                <input
                  id="location"
                  type="text"
                  name="location"
                  placeholder="Garage location"
                  autoComplete="street-address"
                  required
                  disabled={submitting}
                />
              </div>

              {/* Years */}
              <div className="form-group">
                <label htmlFor="years">
                  Years in Business
                </label>

                <input
                  id="years"
                  type="number"
                  name="years"
                  placeholder="e.g. 5"
                  min="0"
                  max="100"
                  required
                  disabled={submitting}
                />
              </div>

              {/* Error */}
              {error && (
                <div className="form-error">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="partner-submit"
                disabled={submitting}
              >
                <span>
                  {submitting
                    ? 'Submitting...'
                    : 'Become a Partner'}
                </span>

                {!submitting && (
                  <ArrowRight size={18} />
                )}
              </button>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="booking-success">
            <CheckCircle2
              size={52}
              strokeWidth={1.5}
            />

            <span>
              APPLICATION RECEIVED
            </span>

            <h2>
              Thank you.
            </h2>

            <p>
              We've received your garage
              application. Our team will contact
              you soon.
            </p>

            <button
              type="button"
              className="booking-submit"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}