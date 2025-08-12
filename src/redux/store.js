import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import contactsOps from "./contactsOps";

const rootReducers = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  operation: contactsOps,
});

export const store = configureStore({
  reducer: rootReducers,
});
