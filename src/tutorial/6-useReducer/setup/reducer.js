export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "Item added",
    };
  } else if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value",
    };
  } else if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((p) => p.id !== action.payload);
    return {
      ...state,
      people: newPeople,
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  return state;
};
