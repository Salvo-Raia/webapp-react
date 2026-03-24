// Imports
import { NavLink, Outlet } from "react-router-dom";
import { useLoaderContext } from "../../../context/LoaderContext";
import { useAlertContext } from "../../../context/AlertContext";

export default function DefaulLayout() {
  const { isLoading } = useLoaderContext();
  const { alert, hideAlert } = useAlertContext();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            Site Logo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="movies" className="nav-link">
                  Movie List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="pb-5">
        {isLoading && (
          <div className="overlay-loading text-center text-light">
            <h1>Loading...</h1>
          </div>
        )}

        <div className="container">
          {alert.visibility && (
            <div>
              <div
                className={`alert alert-${alert.type} mb-4 alert-dismissibale fade show mb-4 d-flex justify-content-between align-items-center`}
                role="alert"
              >
                {alert.message}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={hideAlert}
                />
              </div>
            </div>
          )}
          <Outlet />
        </div>
      </main>
    </>
  );
}
