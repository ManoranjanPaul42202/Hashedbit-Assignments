import { useLocation } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();

  const bookingId = Math.floor(Math.random() * 1000000);

  if (!state) return <h2>No Booking Found</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🎉 Seat Booked Successfully!</h2>

      <p><b>Booking ID:</b> {bookingId}</p>
      <p><b>Name:</b> {state.name}</p>
      <p><b>Email:</b> {state.email}</p>
      <p><b>Mobile:</b> {state.mobile}</p>
      <p><b>Movie ID:</b> {state.movieId}</p>
    </div>
  );
}

export default Confirmation;