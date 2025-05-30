import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features//cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

const arr1 = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
];

const obj = { a: 1, b: 2 };
