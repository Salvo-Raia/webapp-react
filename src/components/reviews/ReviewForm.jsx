// Imports
import { useState } from "react";
import axios from "axios";

const formInitialData = {
  name: "",
  text: "",
  vote: "",
};

export default function ReviewForm({ movieId, afterFormSubmit }) {
  const [formData, setFormData] = useState(formInitialData);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    storeMovieReview();
    console.log("Review form for movie: " + movieId + " sent");
    console.log(formData);
    setFormData(formInitialData);
  };

  const storeMovieReview = () => {
    axios
      .post(`http://localhost:3000/movies/${movieId}/review`, formData)
      .then((res) => {
        console.log(res.data);
        afterFormSubmit();
      });
  };

  return (
    <div className="card my-4">
      <div className="card-header bg-dark text-light">
        <h2>Add a new review</h2>
      </div>
      <div className="card-body bg-secondary">
        <form onSubmit={handleFormSubmit}>
          <div className="my-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              className="form-control"
              onChange={handleFormChange}
              type="text"
              id="name"
              autoComplete="given-name"
            />
          </div>

          <div className="my-2">
            <label htmlFor="text">Review</label>
            <textarea
              name="text"
              value={formData.text}
              className="form-control"
              onChange={handleFormChange}
              id="text"
            />
          </div>

          <div className="my-2">
            <label htmlFor="vote">Vote</label>
            <input
              name="vote"
              value={formData.vote}
              min="1"
              max="5"
              className="form-control"
              onChange={handleFormChange}
              type="number"
              id="vote"
            />
          </div>
          <button className="btn btn-primary my-2">Send review</button>
        </form>
      </div>
    </div>
  );
}
