import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const handleClick = () => {
    setPeople([]);
  };
  const removeItem = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };
  return (
    <React.Fragment>
      <h2>useState array example</h2>
      <ul>
        {people.map((p) => (
          <li className="item" key={p.id}>
            {p.name}
            <button type="button" onClick={() => removeItem(p.id)}>
              Remove Item{" "}
            </button>
          </li>
        ))}
      </ul>
      <button className="btn" type="button" onClick={handleClick}>
        CLEAR ALL
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
