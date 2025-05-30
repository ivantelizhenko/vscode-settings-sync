import { createSlice } from "@reduxjs/toolkit";

type CartItem = { title: string; description: string };

type CartState = {
  items: CartItem[];
  description: string;
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    nameFn() {},
  },
});

export const { nameFn } = cartSlice.actions;
export default cartSlice.reducer;
