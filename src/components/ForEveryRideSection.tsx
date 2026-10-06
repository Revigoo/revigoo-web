import './ForEveryRideSection.css'

const moments = [
  {
    number: '01',
    title: 'EVERYDAY RIDES',
    description: 'Work. College. Commute. Weekend escapes.',
  },
  {
    number: '02',
    title: 'EVERY SERVICE',
    description: "Taking care of your bike shouldn't become a hassle.",
  },
  {
    number: '03',
    title: 'EVERY JOURNEY',
    description: 'A better experience, from service to road.',
  },
]

export default function ForEveryRideSection() {
  return (
    <section className="every-ride-section" id="for-every-ride">
      <div className="every-ride-container">

        {/* HEADER */}
        <div className="every-ride-kicker">
          <span />
          FOR EVERY RIDE
        </div>

        {/* MAIN STATEMENT */}
        <div className="every-ride-main">
          <h2 className="every-ride-title">
            Your bike works hard
            <br />
            for you.
            <br />
            <span>We believe its care should too.</span>
          </h2>

          <div className="every-ride-mark">
            <div className="every-ride-mark-line" />

            <p>
              REVIGOO is building a simpler way to
              take care of the machines that keep
              everyday life moving.
            </p>
          </div>
        </div>

        {/* MOMENTS */}
        <div className="every-ride-moments">
          {moments.map((moment) => (
            <div
              className="every-ride-moment"
              key={moment.number}
            >
              <span className="every-ride-number">
                {moment.number}
              </span>

              <div className="every-ride-moment-content">
                <h3>{moment.title}</h3>

                <p>{moment.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BRAND STATEMENT */}
        <div className="every-ride-footer">
          <span>REVIGOO</span>

          <strong>
            RIDE EASY. WE CARE.
          </strong>
        </div>

      </div>
    </section>
  )
}