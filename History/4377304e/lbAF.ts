import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice.js";
import customerReducer from "./features/customers/customerSlice.js";
const store = configureStore({
  reducer: {
    customName: customReducer,
  },
});
export default store;
