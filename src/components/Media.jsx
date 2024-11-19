import React from "react";
import "./Media.css";

const Media = ({ type, src, alt, description }) => {
  if (type === "image") {
    return <img src={src} alt={alt} className="media-image" />;
  } else if (type === "video") {
    return (
      <video className="media-video" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  return null;
};

export default Media;
