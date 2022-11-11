import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  let refContainer = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  return (
    <>
      <form className="form">
        <div className="form-control">
          <input type="text" ref={refContainer}></input>
          <button type="submit" onClick={(e) => handleClick(e)}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
