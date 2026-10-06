import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import './NotFound.css'

interface NotFoundProps {
  onBackHome?: () => void
}

export default function NotFound({
  onBackHome,
}: NotFoundProps) {
  return (
    <main className="not-found">

      {/* BACKGROUND DETAIL */}
      <div className="not-found-glow" />

      <div className="not-found-container">

        {/* TOP */}
        <div className="not-found-top">
          <button
            type="button"
            className="not-found-logo"
            onClick={onBackHome}
          >
            RE<span>V</span>IGOO
          </button>

          <span className="not-found-label">
            ERROR 404
          </span>
        </div>

        {/* MAIN */}
        <div className="not-found-content">

          <div className="not-found-number">
            404
          </div>

          <div className="not-found-copy">

            <span className="not-found-kicker">
              WRONG TURN
            </span>

            <h1>
              This road
              <br />
              <span>doesn't exist.</span>
            </h1>

            <p>
              Looks like you've taken a wrong turn.
              The page you're looking for isn't available,
              but there's always another road to take.
            </p>

            <button
              type="button"
              className="not-found-button"
              onClick={onBackHome}
            >
              <ArrowLeft size={17} />
              Back to REVIGOO
              <ArrowUpRight size={16} />
            </button>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="not-found-bottom">
          <span>
            MOTORCYCLE SERVICE, REIMAGINED
          </span>

          <strong>
            RIDE EASY. WE CARE.
          </strong>
        </div>

      </div>
    </main>
  )
}