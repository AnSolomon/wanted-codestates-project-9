import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./userInfoSlice";
import { rankDataSlice } from "./rankDataSlice";

const reducer = combineReducers({
  userInfoSlice: userInfoSlice.reducer,
  rankDataSlice: rankDataSlice.reducer,
});

export default configureStore({
  reducer,
});
