import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    //if name and email are not empty add to people
    if (firstName && email) {
      //create unique id
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      console.log(people);

      //cleare inputs
      setName("");
      setEmail("");
    } else {
      console.log("Please enter a value");
    }
  };

  return (
    <>
      <form className="form">
        <div className="form-control">
          <label htmlFor="firstName">Name :</label>
          <input
            value={firstName}
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <button className="btn" onClick={handleSubmit}>
          Add person
        </button>
      </form>
      <ul>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <li key={id} className="item">
              <h4>{firstName}</h4>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ControlledInputs;
