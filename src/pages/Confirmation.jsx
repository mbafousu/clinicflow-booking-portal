import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h1>Appointment Request Submitted</h1>
        <p>
          Thank you. Your appointment request has been received successfully.
        </p>
        <Link to="/" className="primary-btn">
          Back Home
        </Link>
      </div>
    </main>
  );
}