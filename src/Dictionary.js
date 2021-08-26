import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
    let searchFormElement = document.querySelector("#search_form");
    searchFormElement.value = "";
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          id="search_form"
          className="form-control"
          placeholder="Search for a word"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
