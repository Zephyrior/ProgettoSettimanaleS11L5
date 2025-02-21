import { configureStore } from "@reduxjs/toolkit";
import index from "../reducers/index";

const store = configureStore({
  reducer: index,
});
export default store;
