import React from "react";

function About(props) {
  const imgSrc = props.imageSrc;
  return (
    <aside>
      <img src={imgSrc} alt="blog logo" />
      <p>{props.aboutText}</p>
    </aside>
  );
}

export default About;