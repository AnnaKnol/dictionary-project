import React from "react";

import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms.length > 0) {
    return (
      <ul className="Antonyms">
        {props.antonyms.map(function (antonym, index) {
          return (
            <li key={index}>
              <a href="/" onClick={props.acceptClickWord}>
                {antonym}
              </a>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
