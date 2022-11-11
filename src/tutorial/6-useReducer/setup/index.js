import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

const Index = () => {
  const defaultState = {
    people: data,
    isModalOpen: false,
    modalContent: "",
  };

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else dispatch({ type: "NO_VALUE" });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button className="btn" type="submit">
          submit
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: person.id });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
