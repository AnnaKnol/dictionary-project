import React from "react";
import ReactDOM from "react-dom";
import Dictionary from "./Dictionary";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a href="https://www.annaknol.be" target="_blank" rel="noreferrer">
            Anna Knol
          </a>{" "}
          (
          <a
            href="https://github.com/AnnaKnol/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>
          ), background-image from{" "}
          <a href="https://www.rawpixel.com" target="_blank" rel="noreferrer">
            rawpixel
          </a>
        </footer>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
