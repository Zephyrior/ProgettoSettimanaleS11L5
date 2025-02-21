import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import index from "../reducers/index";
import searchReducer from "../reducers/searchReducer";
import songReducer from "../reducers/songReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  songs: songReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
