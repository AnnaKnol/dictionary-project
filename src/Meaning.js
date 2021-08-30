import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <ol>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <li key={index}>
              <div>
                {definition.definition}
                <Example example={definition.example} />
                <Synonyms synonyms={definition.synonyms} />
                <Antonyms antonyms={definition.antonyms} />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
