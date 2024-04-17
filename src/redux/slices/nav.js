import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      name: "aboutUs",
      url: "",
    },
    {
      name: "howItWorks",
      url: "",
    },
    {
      name: "bissnesClient",
      url: "",
    },
    {
      name: "privateClient",
      url: "/private-rules",
    },
    {
      name: "contacts",
      url: "",
    },
  ],
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {},
});

export default navSlice.reducer;
