import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    colorR: 222,
    colorG: 19,
    colorB: 229,
    BgColor: `222,19,229`,
  },
};

export const colorReducers = createSlice({
  name: "@colors",
  initialState: initialState,
  reducers: {
    changeColorR: (state, { type, payload }) => ({
      colors: {
        ...state.colors,
        colorR: payload,
      },
    }),
    changeColorG: (state, { type, payload }) => ({
      colors: {
        ...state.colors,

        colorG: payload,
      },
    }),
    changeColorB: (state, { type, payload }) => ({
      colors: {
        ...state.colors,

        colorB: payload,
      },
    }),
    changeBgColor: (state, { type, payload }) => ({
      colors: {
        ...state.colors,
        BgColor: payload,
      },
    }),
  },
});
