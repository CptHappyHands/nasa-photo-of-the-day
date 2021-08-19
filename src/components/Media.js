import React from "react";

export default function Media({ url }) {
  if (`${url}`.includes("youtube") === true) {
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          frameBorder="0"
          src={`${url}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        ;
      </div>
    );
  } else {
    return (
      <div className="image">
        <img src={`${url}`} alt=""></img>
      </div>
    );
  }
}
