import React from "react";

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
