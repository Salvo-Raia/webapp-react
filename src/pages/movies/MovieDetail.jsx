// Imports
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoaderContext } from "../../../context/LoaderContext";

import axios from "axios";
import Rating from "../../components/rating";
import ReviewCard from "../../components/reviews/ReviewCard";
import ReviewForm from "../../components/reviews/ReviewForm";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const { activateLoading, deactivateLoading } = useLoaderContext();
  useEffect(fetchMovie, []);

  function fetchMovie() {
    activateLoading();
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => {
        const movie = res.data.result;
        let voteSum = 0;
        movie.reviews.forEach((review) => {
          voteSum += review.vote;
        });
        movie.average_vote = Math.floor(voteSum / movie.reviews.length);
        setMovie(movie);
      })
      .finally(() => {
        deactivateLoading();
      })
      .catch((err) => {
        showAlert(err, "danger");
        deactivateLoading();
      });
  }

  if (!movie) return <></>;

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
            <p>
              <Rating vote={movie.average_vote} maxVote="5" />
            </p>
            <address>
              <b>Directed By:</b> {movie.director}
            </address>
            <p>
              <b>Abstract: </b>
              {movie.abstract}
            </p>
          </div>
        </div>
      </div>

      <section className="reviews">
        <h2 className="text-light my-2">Reviews</h2>
        {movie.reviews.map((review, i) => (
          <ReviewCard key={review.id} review={review} />
        ))}
        <ReviewForm movieId={id} afterFormSubmit={fetchMovie} />
      </section>
    </>
  );
}
