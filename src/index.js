import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/social-followers-cards">
    <App />
  </BrowserRouter>
);
