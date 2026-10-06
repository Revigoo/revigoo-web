import {
  ArrowUpRight,
  Mail,
} from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* MAIN FOOTER */}
        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <div className="footer-logo">
              RE<span>V</span>IGOO
            </div>

            <p className="footer-description">
              A simpler way to take care of your bike.
              Connecting riders with service partners
              through a better service experience.
            </p>

            <a
              href="mailto:info@revigoo.in"
              className="footer-email"
            >
              <Mail size={16} />
              info@revigoo.in
            </a>

          </div>

          {/* RIDERS */}
          <div className="footer-column">

            <h3>RIDERS</h3>

            <a href="#services">
              Services
            </a>

            <a href="#how-it-works">
              How It Works
            </a>

            <a href="#riders">
              For Riders
            </a>

            <a href="#services">
              Book a Service
            </a>

          </div>

          {/* GARAGES */}
          <div className="footer-column">

            <h3>GARAGES</h3>

            <a href="#garages">
              Become a Partner
            </a>

            <a href="#garages">
              Partner Benefits
            </a>

            <a href="#garages">
              Partner Network
            </a>

            <a href="#contact">
              Contact Us
            </a>

          </div>

          {/* COMPANY */}
          <div className="footer-column">

            <h3>COMPANY</h3>

            <a href="#about">
              About REVIGOO
            </a>

            <a href="#why-revigoo">
              Why REVIGOO
            </a>

            <a href="#contact">
              Contact
            </a>

            <a href="#careers">
              Careers
            </a>

          </div>

        </div>

        {/* LARGE BRAND STATEMENT */}
        <div className="footer-statement">

          <span>RIDE EASY.</span>

          <strong>WE CARE.</strong>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <div className="footer-copyright">
            © {new Date().getFullYear()} REVIGOO.
            All rights reserved.
          </div>

          <div className="footer-legal">

            <a href="#privacy">
              Privacy
            </a>

            <a href="#terms">
              Terms
            </a>

          </div>

            <div className="footer-social">

            {/* Instagram */}
            <a
                href="https://www.instagram.com/revigoo.in"
                target="_blank"
                rel="noreferrer"
                aria-label="REVIGOO Instagram"
            >
                <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                />
                </svg>
            </a>

            {/* LinkedIn */}
            <a
                href="#linkedin"
                aria-label="REVIGOO LinkedIn"
            >
                <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M6.5 8.5H3.5V20H6.5V8.5Z" />
                <path d="M5 3.5C4.03 3.5 3.25 4.28 3.25 5.25C3.25 6.22 4.03 7 5 7C5.97 7 6.75 6.22 6.75 5.25C6.75 4.28 5.97 3.5 5 3.5Z" />
                <path d="M9 8.5H12V10.07C12.7 9.03 13.88 8.2 15.75 8.2C19.15 8.2 20.5 10.43 20.5 13.72V20H17.5V14.28C17.5 12.91 17.47 11.15 15.5 11.15C13.5 11.15 13.5 12.65 13.5 14.19V20H9V8.5Z" />
                </svg>
            </a>

            {/* Email */}
            <a
                href="mailto:info@revigoo.in"
                aria-label="Email REVIGOO"
            >
                <Mail size={18} strokeWidth={1.8} />
            </a>

            </div>

        </div>

        {/* FINAL LINE */}
        <div className="footer-end">

          <span>
            MOTORCYCLE SERVICE, REIMAGINED.
          </span>

          <ArrowUpRight size={15} />

        </div>

      </div>

    </footer>
  )
}