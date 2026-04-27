const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export async function createAppointment(formData) {
  const response = await fetch(`${API_BASE_URL}/api/booking-requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create appointment");
  }

  return data;
}