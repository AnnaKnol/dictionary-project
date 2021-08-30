import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
        <ReactAudioPlayer
          className="audioPlayer"
          src={props.phonetic.audio}
          controls
          controlsList="nodownload"
        />
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  }
}
