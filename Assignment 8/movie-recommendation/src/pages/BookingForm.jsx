import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/confirmation", {
      state: { ...form, movieId: id },
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Book Seat - Movie {id}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;