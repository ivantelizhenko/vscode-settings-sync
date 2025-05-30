import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    customName: customReducer,
  },
});
export default store;
