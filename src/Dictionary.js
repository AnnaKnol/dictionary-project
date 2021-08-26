import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState([]);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let searchFormElement = document.querySelector("#search_form");
    searchFormElement.value = "";
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="Dictionary-header">
        <h1 className="text-center">Dictionary</h1>
        <strong>What word are you looking for?</strong>
        <form onSubmit={search}>
          <input
            type="search"
            id="search_form"
            className="form-control"
            placeholder="Search for a word"
            onChange={handleChange}
            autoComplete="off"
          />
        </form>
      </div>
      {results.map(function (result, index) {
        return <Results results={result} key={index} />;
      })}
    </div>
  );
}
