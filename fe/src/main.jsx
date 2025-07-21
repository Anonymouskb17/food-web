import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
