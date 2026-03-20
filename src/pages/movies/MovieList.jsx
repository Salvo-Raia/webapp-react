// Imports
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieListComponent from "../../components/MovieListComponent";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(fetchMovies, []);

  function fetchMovies() {
    axios.get("http://localhost:3000/movies").then((res) => {
      setMovies(res.data.result);
    });
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-light">Movie List</h1>
        <div className="d-flex gap-2 justify-space-between align-items-center">
          <NavLink to="/movies/add-new">
            <button className="btn btn-primary">
              <i className="bi bi-plus-square"></i> Add New Movie
            </button>
          </NavLink>
        </div>
      </div>
      <MovieListComponent movies={movies} />
    </>
  );
}
