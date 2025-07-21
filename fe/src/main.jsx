import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Signup />
  </StrictMode>
);
