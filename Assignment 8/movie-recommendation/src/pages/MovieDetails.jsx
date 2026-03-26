import { useParams, useNavigate } from "react-router-dom";


const movies = [
  { id: 1, title: "Inception"},
  { id: 2, title: "Avengers"},
  { id: 3, title: "Interstellar"},
  { id: 4, title: "Joker"},
  { id: 5, title: "Titanic"},
  { id: 6, title: "The Dark Knight"},
  { id: 7, title: "Fight Club"},
  { id: 8, title: "Gladiator"}
];

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="details-container">
      <div className="details-content">
        <h2>{movie.title}</h2>
        <p>
          A blockbuster movie with amazing storyline, action, and visuals.
        </p>

        <button onClick={() => navigate(`/book/${movie.id}`)}>
          🎟 Book Seat
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;