import { useNavigate } from "react-router-dom";
import inception from "../images/inception.jpeg";
import avengers from "../images/avengers.jpg";
import interstellar from "../images/interstellar.jpg";
import joker from "../images/joker.jpg";
import titanic from "../images/titanic.jpg";
import darkknight from "../images/darkknight.jpg";
import fightclub from "../images/fightclub.jpg";
import gladiator from "../images/gladiator.png";

const movies = [
  { id: 1, title: "Inception", image: inception },
  { id: 2, title: "Avengers", image: avengers },
  { id: 3, title: "Interstellar", image: interstellar },
  { id: 4, title: "Joker", image: joker },
  { id: 5, title: "Titanic", image: titanic },
  { id: 6, title: "The Dark Knight", image: darkknight },
  { id: 7, title: "Fight Club", image: fightclub },
  { id: 8, title: "Gladiator", image: gladiator }
];

function Movies() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="heading">🎬 Movie Explorer</h1>

      <div className="grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.title} />

            <div className="overlay">
              <p>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;