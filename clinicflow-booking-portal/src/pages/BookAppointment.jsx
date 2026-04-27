import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAppointment } from "../services/api";

export default function BookAppointment() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await createAppointment(form);
      navigate("/confirmation");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="booking-page">
      <section className="booking-layout">
        <div className="booking-info">
          <p className="badge">Online Booking</p>
          <h1>Request an appointment today.</h1>
          <p>
            Fill out the form and your clinic team will receive your appointment
            request.
          </p>

          <div className="info-box">
            <h3>What happens next?</h3>
            <p>
              After submitting, your appointment will be added to the clinic
              system for staff review.
            </p>
          </div>
        </div>

        <div className="form-card">
          <h2>Appointment Request</h2>
          <p className="form-subtitle">
            Enter your details and preferred visit time.
          </p>

          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-row">
              <div className="input-group">
                <label>First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Date</label>
                <input
                  type="date"
                  name="appointmentDate"
                  value={form.appointmentDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Time</label>
                <input
                  type="time"
                  name="appointmentTime"
                  value={form.appointmentTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Reason for Visit</label>
              <textarea
                name="reason"
                rows="4"
                value={form.reason}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button className="primary-btn full-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Appointment"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}