import { createSlice } from "@reduxjs/toolkit";

type CartItem = { id: string; title: string; price: number; quantity: number };

type CartState = {
  items: CartItem[];
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
