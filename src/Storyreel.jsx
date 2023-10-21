import React from "react";
import "./Storyreel.css";
import Story from "./Story";

function Storyreel() {
  return (
    <div className="Storyreel">
      <Story image="./scene.jpeg" profileSrc="./hi.jpeg" title="Cillian" />
      <Story image="./cr7.jpg" profileSrc="./cr.jpeg" title="Cristiano" />
      <Story image="./lh44.jpg" profileSrc="./lewis.png" title="lewis" />
      <Story image="./applepark.jpg" profileSrc="./apple.jpeg" title="Apple" />
    </div>
  );
}

export default Storyreel;
