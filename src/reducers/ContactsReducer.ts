import { Person } from "../interfaces/Person";

const initialState = {};
type actionType = { type: string; payload: {} };

export const ContactsReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "add":
      return { ...state, inputValue: action.payload };

    default:
      return state;
  }
};
