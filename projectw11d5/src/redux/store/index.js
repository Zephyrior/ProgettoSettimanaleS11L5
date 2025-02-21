import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import index from "../reducers/index";
import searchReducer from "../reducers/searchReducer";
import songReducer from "../reducers/songReducer";
import favouritesReducer from "../reducers/favouritesReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  songs: songReducer,
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
