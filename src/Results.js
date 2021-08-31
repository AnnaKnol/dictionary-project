import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Origin from "./Origin";

import "./Results.css";

export default function Results(props) {
  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {props.results.phonetics.map(function (phonetic, index) {
        if (props.results.phonetics[0]) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        } else {
          return null;
        }
      })}
      <Origin origin={props.results.origin} />
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
