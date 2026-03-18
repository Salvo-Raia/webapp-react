import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Custom CSS
import "./assets/css/index.css";
// Bootstrap CSS

//Bootstrap script

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
