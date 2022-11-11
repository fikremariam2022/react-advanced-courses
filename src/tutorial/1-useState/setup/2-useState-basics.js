import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    const newText = text === "Random Title" ? "hello world" : "Random Title";
    setText(newText);
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
