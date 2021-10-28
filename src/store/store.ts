import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { ContactsReducer } from "../reducers/ContactsReducer";

const initialState = {};

const reducers = combineReducers({
  contactReducer: ContactsReducer,
});

export const initialStore = createStore(
  reducers,
  initialState,
  applyMiddleware(thunkMiddleware)
);

export type RootState = ReturnType<typeof initialStore.getState>;
