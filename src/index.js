import React from "react";
import { globalStyles } from "./stitches.config";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

globalStyles();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
