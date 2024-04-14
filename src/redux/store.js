import { configureStore } from "@reduxjs/toolkit";

import services from "./slices/services";
import order from "./slices/order";

const store = configureStore({
   reducer: { 
    services,
    order
   }
})

export default store