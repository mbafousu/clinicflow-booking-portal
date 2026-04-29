import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="landing-page">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-mark">+</span>
          <span>ClinicFlow</span>
        </div>

        <Link to="/book" className="nav-btn">
          Book Appointment
        </Link>
      </nav>

      <section className="hero-section">
        <div className="hero-left">
          <p className="eyebrow">Patient Booking Portal</p>

          <h1>
           Private appointment booking for modern clinics.
          </h1>

          <p className="hero-description">
            A clean and patient-friendly booking experience connected to the
            ClinicFlow healthcare management system.
          </p>

          <div className="hero-actions">
            <Link to="/book" className="primary-btn">
              Schedule Appointment
            </Link>

            <a href="#features" className="secondary-btn">
              Learn More
            </a>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Online booking access</p>
            </div>

            <div className="stat-card">
              <h3>Fast</h3>
              <p>Appointment requests</p>
            </div>

            <div className="stat-card">
              <h3>Secure</h3>
              <p>Patient intake flow</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
  <div className="booking-preview">
    <div className="preview-header">
      <div>
        <p className="preview-label">Booking Preview</p>
        <h3>Choose an available time</h3>
      </div>
      <span className="status-pill">Secure</span>
    </div>

    <div className="date-card">
      <p className="date-label">Next Available</p>
      <h4>Monday, April 29</h4>
      <p>Select a preferred time below.</p>
    </div>

    <div className="slot-grid">
      <button>9:00 AM</button>
      <button>10:30 AM</button>
      <button>1:00 PM</button>
      <button>3:30 PM</button>
    </div>

    <div className="privacy-card">
      <div className="privacy-icon">🔒</div>
      <div>
        <h4>Private by design</h4>
        <p>
          Patients only submit their own request. Other patient appointments are
          never shown in the public portal.
        </p>
      </div>
    </div>
  </div>
</div>
      </section>

      <section id="features" className="features-section">
        <div className="section-heading">
          <p className="eyebrow">Built for real workflows</p>
          <h2>A better patient booking experience</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">📅</span>
            <h3>Simple Scheduling</h3>
            <p>
              Patients can request appointments quickly with a clean and guided
              form experience.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🔐</span>
            <h3>Secure Intake</h3>
            <p>
              Patient information is collected in a structured format for clinic
              staff to review.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>ClinicFlow Connected</h3>
            <p>
              Appointment requests can connect directly with the internal
              ClinicFlow admin system.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}