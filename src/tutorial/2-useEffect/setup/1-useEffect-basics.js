import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("inside use effect callback");
  }, [value]);
  console.log("outside use effect");

  return (
    <>
      <h2>useEffect Basics</h2>
      {value}
      <button
        type="button"
        className="btn"
        onClick={() => {
          setValue(value + 1);
          document.title = `you clicked me ${value}`;
        }}
      >
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
