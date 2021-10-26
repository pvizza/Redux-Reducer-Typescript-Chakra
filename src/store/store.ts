import { createStore } from "redux";

const initialState: object = {};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const action = () => (dispatch) => {
  return dispatch({ type: "ACTION" });
};

export const initialStore = createStore(reducer);
