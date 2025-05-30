import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>; // тип для доступу до стану
// export type AppDispatch = typeof store.dispatch; // тип для dispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
