import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer controls controlsList="nodownload" />
        <a
          href={props.phonetic.audio}
          id="idiot"
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>{" "}
        | {props.phonetic.text}
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  }
}
