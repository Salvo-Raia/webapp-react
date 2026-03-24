// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaulLayout from "./pages/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieList from "./pages/movies/MovieList";
import MovieDetail from "./pages/movies/MovieDetail";
import AddNewMovie from "./pages/movies/AddNewMovie";
import { LoaderContextProvider } from "./components/reviews/LoaderContext";

export default function App() {
  return (
    <LoaderContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaulLayout}>
            <Route index Component={HomePage} />
            <Route path="movies">
              <Route index Component={MovieList} />
              <Route path=":id" Component={MovieDetail} />
              <Route path="add-new" Component={AddNewMovie} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderContextProvider>
  );
}
