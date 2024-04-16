import { configureStore } from "@reduxjs/toolkit";

import services from "./slices/services";
import order from "./slices/order";
import languages from "./slices/languages";
import stepByStep from "./slices/stepByStep";

const store = configureStore({
   reducer: { 
    services,
    order,
    languages,
    stepByStep
   }
})

export default store