import { Person } from "../interfaces/Person";

type initialState = "";
type actionType = { type: string; payload: {} };

export const ContactsReducer = (state: any, action: actionType) => {
  switch (action.type) {
    case "add":
      console.log(state);
      return { ...state, inputValue: action.payload };

    default:
      return state;
  }
};
