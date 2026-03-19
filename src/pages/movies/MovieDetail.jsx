import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(fetchMovie, []);

  function fetchMovie() {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      const movie = res.data.result;
      let voteSum = 0;
      movie.reviews.forEach((review) => {
        voteSum += review.vote;
      });
      movie.average_vote = Math.ceil(voteSum / movie.reviews.length);
      setMovie(movie);
    });
  }

  if (!movie) return <h1>Loading...</h1>;

  return (
    <>
      <h1 className="text-light">{movie.title}</h1>
      <div className="row text-light">
        <div className="col-5">
          <img src={movie.image} alt={movie.title} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="movie-info my-4">
            <h4>
              {movie.title}{" "}
              <span className="h5">{`(${movie.release_year})`}</span>
            </h4>
            <h6 className="text-secondary">{movie.genre}</h6>
            <address>
              <b>Directed By:</b> {movie.director}
            </address>
            <p>
              <b>Abstract: </b>
              {movie.abstract}
            </p>
            <p>
              <b>Vote: </b>
              {movie.average_vote}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
