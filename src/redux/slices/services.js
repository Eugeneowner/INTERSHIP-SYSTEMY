import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      price: 60,
      weight: 1,
    },
    {
      id: 2,
      price: 70,
      weight: 5,
    },
    {
      id: 3,
      price: 90,
      weight: 10,
    },
    {
      id: 4,
      price: 110,
      weight: 30,
    },
  ],
};


const servicesSlice = createSlice({
    name: "services", 
    initialState, 
    reducers: { 

    }
})

export default servicesSlice.reducer