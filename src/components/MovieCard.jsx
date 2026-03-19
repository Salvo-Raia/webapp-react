// Imports
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.image} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="mb-1">{movie.genre}</p>
        <p>
          Directed by: <em>{movie.director}</em>
        </p>
        <p>"{movie.abstract}"</p>
        <p className="card-text">Vote: {movie.average_vote}/5</p>
        <Link to={"/movies/" + movie.id}>See more</Link>
      </div>
    </div>
  );
}
