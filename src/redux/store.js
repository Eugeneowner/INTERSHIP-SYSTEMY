import { configureStore } from "@reduxjs/toolkit";

import services from "./slices/services";
import order from "./slices/order";
import languages from "./slices/languages";
import stepByStep from "./slices/stepByStep";
import nav from  "./slices/nav"

const store = configureStore({
   reducer: { 
    services,
    order,
    languages,
    stepByStep,
    nav
   }
})

export default store