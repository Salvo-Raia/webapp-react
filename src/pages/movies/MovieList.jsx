// Imports
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
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
      <h1 className="text-light">Movie List</h1>
      <MovieListComponent movies={movies} />
    </>
  );
}
