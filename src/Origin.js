import React from "react";

import "./Origin.css";

export default function Origin(props) {
  if (props.origin) {
    return (
      <div className="Origin">
        <strong>Origin:</strong> {props.origin}
      </div>
    );
  } else {
    return null;
  }
}
