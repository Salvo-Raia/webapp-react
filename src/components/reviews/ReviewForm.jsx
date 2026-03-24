// Imports
import { useState } from "react";
import { useLoaderContext } from "../../../context/LoaderContext";
import { useAlertContext } from "../../../context/AlertContext";
import axios from "axios";

const formInitialData = {
  name: "",
  text: "",
  vote: "",
};

export default function ReviewForm({ movieId, afterFormSubmit }) {
  const [formData, setFormData] = useState(formInitialData);
  const { activateLoading, deactivateLoading } = useLoaderContext();
  const { showAlert } = useAlertContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return showAlert("Invalid input fields", "warning");
    }
    storeMovieReview();
    console.log("Review form for movie: " + movieId + " sent");
    console.log(formData);
    setFormData(formInitialData);
  };

  const storeMovieReview = () => {
    activateLoading();
    axios
      .post(`http://localhost:3000/movies/${movieId}/review`, formData)
      .then((res) => {
        showAlert("Review successfully added", "success");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        afterFormSubmit();
      })
      .catch((err) => {
        showAlert(err, "danger");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        deactivateLoading();
      });
  };

  const validateForm = () => {
    if (!formData.name) return false;
    if (formData.vote > 5 || formData.vote < 1) return false;
    if (!formData.text) return false;
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
              onChange={handleInputChange}
              type="text"
              id="name"
            />
          </div>

          <div className="my-2">
            <label htmlFor="text">Review</label>
            <textarea
              name="text"
              value={formData.text}
              className="form-control"
              onChange={handleInputChange}
              id="text"
            />
          </div>

          <div className="my-2">
            <label htmlFor="vote">Vote</label>
            <input
              name="vote"
              value={formData.vote}
              className="form-control"
              onChange={handleInputChange}
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
