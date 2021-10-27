import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

const initialState = {
  counter: 10,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ACTION":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export const action = () => (dispatch: any) => {
  return dispatch({ type: "ACTION" });
};

export const initialStore = createStore(
  reducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);
