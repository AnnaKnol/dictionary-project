import axios from "axios";
import React, { useState, useEffect } from "react";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [input, setInput] = useState("");
  let [keyword, setKeyword] = useState("happy");
  let [results, setResults] = useState([]);
  let [photos, setPhotos] = useState([]);

  useEffect(
    function () {
      function handleDictionaryResponse(response) {
        setResults(response.data);
      }

      function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
      }
      let pexelsApikey =
        "563492ad6f91700001000001a9dc26a8de734c788e6889c2ae75ab83";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      let headers = { Authorization: `Bearer ${pexelsApikey}` };
      axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

      // documentation: https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      return axios
        .get(apiUrl)
        .then(handleDictionaryResponse)
        .catch(function (error) {
          alert("Sorry, there's no definition for that/those word(s) 🤷");
        });
    },
    [keyword]
  );

  function search(event) {
    event.preventDefault();
    setKeyword(input);
    let searchFormElement = document.querySelector("#search_form");
    searchFormElement.value = "";
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function acceptClickWord(event) {
    event.preventDefault();
    setKeyword(event.target.text);
  }

  return (
    <div className="Dictionary">
      <section>
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
      </section>
      {results.map(function (result, index) {
        return (
          <Results
            results={result}
            key={index}
            acceptClickWord={acceptClickWord}
          />
        );
      })}
      <Photos photos={photos} />
    </div>
  );
}
