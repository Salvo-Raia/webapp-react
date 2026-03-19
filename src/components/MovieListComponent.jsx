// Imports
import MovieCard from "./MovieCard";

export default function MovieListComponent({ movies }) {
  return (
    <div className="row row-cols-3 g-2">
      {movies.map((movie) => (
        <div key={movie.id} className="col">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
