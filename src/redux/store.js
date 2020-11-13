import { colorReducers } from "./colorReducers";

import { configureStore } from "@reduxjs/toolkit";

const { reducer } = colorReducers;

const store = configureStore({
  reducer: reducer,
});

export default store;
