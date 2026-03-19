// Imports
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div class="card">
      <img src={movie.image} className="card-img-top" alt={movie.name} />
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">Vote: {movie.average_vote}/5</p>
        <Link to={"/movies/" + movie.id}>See more</Link>
      </div>
    </div>
  );
}
