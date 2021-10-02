import React, { useState } from "react";

import "./Origin.css";

export default function Origin(props) {
  const [originShowing, setOriginShowing] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setOriginShowing(!originShowing);
  }

  if (props.origin) {
    if (originShowing) {
      return (
        <div className="Origin">
          <a href="/" onClick={handleClick}>
            Origin:
          </a>{" "}
          {props.origin}
        </div>
      );
    } else {
      return (
        <div className="Origin">
          <a href="/" onClick={handleClick}>
            Origin
          </a>
        </div>
      );
    }
  } else {
    return null;
  }
}
