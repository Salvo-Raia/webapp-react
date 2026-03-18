// Imports
import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieList() {
  useEffect(fetchMovies, []);

  function fetchMovies() {
    axios.get("http://localhost:3000/movies");
  }

  return <h1>Movie List</h1>;
}
