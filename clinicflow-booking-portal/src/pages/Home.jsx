import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="badge">ClinicFlow Patient Portal</p>
          <h1>Book your clinic appointment with ease.</h1>
          <p className="hero-text">
            Schedule your visit online through a simple, secure, and modern
            booking experience.
          </p>

          <div className="hero-actions">
            <Link to="/book" className="primary-btn">
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <h3>Why use ClinicFlow?</h3>
          <div className="feature">
            <span>✓</span>
            <p>Fast appointment requests</p>
          </div>
          <div className="feature">
            <span>✓</span>
            <p>Clean patient-friendly experience</p>
          </div>
          <div className="feature">
            <span>✓</span>
            <p>Connected to clinic workflow</p>
          </div>
        </div>
      </section>
    </main>
  );
}