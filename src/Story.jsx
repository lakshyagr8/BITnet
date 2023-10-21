import React from "react";
import "./Story.css";
import { Avatar } from "@mui/material";

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar src={profileSrc}  className="story__avatar"/>

      <h4>{title}</h4>
    </div>
  );
}

export default Story;
