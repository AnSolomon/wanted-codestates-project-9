import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./userInfoSlice";

const reducer = combineReducers({ userInfoSlice: userInfoSlice.reducer});

export default configureStore({
  reducer,
});
