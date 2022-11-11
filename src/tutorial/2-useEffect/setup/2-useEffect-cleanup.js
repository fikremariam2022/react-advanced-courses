import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    console.log(size);
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // return () => window.removeEventListener("resize", checkSize);
  });
  return (
    <>
      <h1>window size</h1>
      <h2>{`PX ${size}`}</h2>
    </>
  );
};

export default UseEffectCleanup;
