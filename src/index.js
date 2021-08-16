import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SearchEngine from "./SearchEngine";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SearchEngine />
    <div>
      <a
        href="https://github.com/Katherine1983-jpg/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code{" "}
      </a>
      by Katherine Simpson
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
