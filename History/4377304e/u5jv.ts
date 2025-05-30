import { configureStore } from "@reduxjs/toolkit";
import someReducer from "./someSlice";

const store = configureStore({
  reducer: {
    someName: someReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
