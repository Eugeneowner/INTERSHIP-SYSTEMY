import { configureStore } from "@reduxjs/toolkit";

import services from "./slices/services";
import order from "./slices/order";
import languages from "./slices/languages";

const store = configureStore({
   reducer: { 
    services,
    order,
    languages
   }
})

export default store