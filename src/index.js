import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./components/App";
import "./styles/globals.css";

ReactDOMClient.createRoot(document.querySelector("#root")).render(<App />);
