import { Dispatch } from "redux";

export const action = (inputValue: object) => (dispatch: Dispatch) => {
  return dispatch({ type: "add", payload: inputValue });
};
