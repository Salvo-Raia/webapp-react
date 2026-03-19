import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(fetchMovie, []);

  function fetchMovie() {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      setMovie(res.data.result);
    });
  }

  return <h1>Movie Detail</h1>;
}
