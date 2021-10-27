import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { ContactsReducer } from "../reducers/ContactsReducer";

const initialState = {};

export const action = (inputValue) => (dispatch) => {
  return dispatch({ type: "add", payload: inputValue });
};

const reducers = combineReducers({
  contactReducer: ContactsReducer,
});

export const initialStore = createStore(
  reducers,
  initialState,
  applyMiddleware(thunkMiddleware)
);
