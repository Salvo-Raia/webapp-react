// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaulLayout from "./pages/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieList from "./pages/movies/MovieList";
import MovieDetail from "./pages/movies/MovieDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaulLayout}>
          <Route index Component={HomePage} />
          <Route path="movies">
            <Route index Component={MovieList} />
            <Route path=":id" Component={MovieDetail} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
