import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const [person, setPerson] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setPerson(data.find((person) => person.id === parseInt(id)));
  }, []);
  return (
    <div>
      <h2>person</h2>
      <p>{person.name}</p>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Person;
