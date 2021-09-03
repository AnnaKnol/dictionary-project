import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos.length > 0) {
    return (
      <section className="Photos row">
        {props.photos.map(function (photo, index) {
          let description = photo.url.slice(29, -9);
          return (
            <div className="col-sm-6 col-md-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt={description}
                />
              </a>
            </div>
          );
        })}
        <a href="https://www.pexels.com">
          <img
            src="https://images.pexels.com/lib/api/pexels-white.png"
            className="pexels-logo"
            alt="pexels-logo"
          />
        </a>
      </section>
    );
  } else {
    return null;
  }
}
