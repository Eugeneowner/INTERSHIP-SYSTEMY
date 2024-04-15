import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "ru",
  list: ["ua", "pl", "ru"],
};

const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    changeLanguages: (state, { payload }) => {
      state.current = payload;
    },
  },
});

export const { changeLanguages } = languagesSlice.actions;

export default languagesSlice.reducer;
