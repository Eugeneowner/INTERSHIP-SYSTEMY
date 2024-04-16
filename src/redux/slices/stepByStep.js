import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      name: "step1",
    },
    {
      id: 2,
      name: "step2",
    },
    {
      id: 3,
      name: "step3",
    },
    {
      id: 4,
      name: "step4",
    },
    {
      id: 5,
      name: "step5",
    },
  ],
};



const stepByStep = createSlice({ 
    name: "stepByStep", 
    initialState,
    reducers: {}
})


export default stepByStep.reducer