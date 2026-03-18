// Imports
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Custom CSS
import "./assets/css/index.css";
// Bootstrap CSS and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
//Bootstrap script
import "bootstrap/dist/js/bootstrap.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
