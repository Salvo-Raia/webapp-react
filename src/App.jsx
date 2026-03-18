// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieList from "../pages/movies/MovieList";
import MovieDetail from "../pages/movies/MovieDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage} />
        <Route path="/movielist" Component={MovieList} />
        <Route path="/movielist/:id" Component={MovieDetail} />
      </Routes>
    </BrowserRouter>
  );
}
