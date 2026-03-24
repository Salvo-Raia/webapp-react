// Imports
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoaderContext } from "../../../context/LoaderContext";

const initialFormDatA = {
  title: "",
  director: "",
  genre: "",
  release_year: "",
  abstract: "",
  image: null,
};

export default function AddNewBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormDatA);
  const { activateLoading, deactivateLoading } = useLoaderContext();

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    storeMovie();
  };

  const storeMovie = (e) => {
    const headerConfig = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    axios;
    activateLoading()
      .post(`http://localhost:3000/movies`, formData, headerConfig)
      .then((res) => {
        const insertId = res.data.id;
        navigate(`/movies/${insertId}`);
      });
  };

  return (
    <>
      <h1 className="text-light">Add new movie</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="text-light">
          <div className="my-2">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              name="title"
              value={formData.title}
              className="form-control"
              onChange={handleInputChange}
              type="text"
              id="title"
              required
            />
          </div>

          <div className="my-2">
            <label htmlFor="director" className="form-label">
              Director
            </label>
            <input
              name="director"
              value={formData.director}
              className="form-control"
              onChange={handleInputChange}
              type="text"
              id="director"
              required
            />
          </div>

          <div className="my-2">
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <input
              name="genre"
              value={formData.genre}
              className="form-control"
              onChange={handleInputChange}
              type="text"
              id="genre"
              required
            />
          </div>

          <div className="my-2">
            <label htmlFor="release_year" className="form-label">
              Release Year
            </label>
            <input
              name="release_year"
              value={formData.release_year}
              className="form-control"
              onChange={handleInputChange}
              type="number"
              id="release_year"
              required
            />
          </div>

          <div className="my-2">
            <label htmlFor="abstract" className="form-label">
              Abstract
            </label>
            <textarea
              name="abstract"
              value={formData.abstract}
              className="form-control"
              onChange={handleInputChange}
              id="abstract"
            />
          </div>
          <label htmlFor="image" className="form-label">
            Movie cover
          </label>
          <input
            name="image"
            className="form-control"
            onChange={handleInputChange}
            type="file"
            id="image"
            required
          />
        </div>
        <button className="btn btn-primary my-2">Add movie</button>
      </form>
    </>
  );
}
