// Imports
import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(fetchMovies, []);

  function fetchMovies() {
    axios.get("http://localhost:3000/movies").then((res) => {
      setMovies(res.data.result);
    });
  }

  return <h1>Movie List</h1>;
}
