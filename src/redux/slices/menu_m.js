import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changeMenuStatus: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { changeMenuStatus } = menuSlice.actions;

export default menuSlice.reducer;
