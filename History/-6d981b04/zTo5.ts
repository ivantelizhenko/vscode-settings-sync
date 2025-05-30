import { createSlice } from "@reduxjs/toolkit";

type CartItem = { items: string; description: string };

const initialState = {
  items: CartItem[],

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
