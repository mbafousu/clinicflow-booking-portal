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
            Modern appointment scheduling for growing clinics.
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
          <div className="dashboard-preview">
            <div className="preview-header">
              <div>
                <p className="preview-label">Today</p>
                <h3>Appointment Requests</h3>
              </div>
              <span className="status-pill">Live</span>
            </div>

            <div className="appointment-preview-card">
              <div className="avatar">SM</div>
              <div>
                <h4>Sarah M.</h4>
                <p>General consultation • 10:30 AM</p>
              </div>
            </div>

            <div className="appointment-preview-card">
              <div className="avatar">JD</div>
              <div>
                <h4>James D.</h4>
                <p>Follow-up visit • 1:00 PM</p>
              </div>
            </div>

            <div className="appointment-preview-card">
              <div className="avatar">AK</div>
              <div>
                <h4>Amina K.</h4>
                <p>New patient intake • 3:15 PM</p>
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