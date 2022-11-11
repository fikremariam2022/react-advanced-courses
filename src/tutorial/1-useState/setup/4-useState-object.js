import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "changed Message" });
  };
  return (
    <React.Fragment>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3> {person.message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
