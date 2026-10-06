import './PageLoader.css'

export default function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-content">
        <div className="page-loader-logo">
          RE<span>V</span>IGOO
        </div>

        <div className="page-loader-line">
          <div className="page-loader-progress" />
        </div>

        <span className="page-loader-label">
          MOTORCYCLE SERVICE, REIMAGINED
        </span>
      </div>
    </div>
  )
}