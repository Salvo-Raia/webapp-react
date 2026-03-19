// Imports
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.image} className="card-img-top" alt={movie.title} />
      <div className="card-body bg-dark text-light">
        <h3 className="card-title">{movie.title}</h3>
        <h6 className="text-secondary my-1">{movie.genre}</h6>
        <address className="my-2">
          Directed by: <em>{movie.director}</em> - {`(${movie.release_year})`}
        </address>

        <p className="my-2">"{movie.abstract}"</p>
        <p className="card-text">Vote: {movie.average_vote}/5</p>
        <Link to={"/movies/" + movie.id}>See more</Link>
      </div>
    </div>
  );
}
