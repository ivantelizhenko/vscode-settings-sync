import { createSlice } from "@reduxjs/toolkit";

type CartState = { title: string; description: string };

const initialState: CartState = {
  title: "",
  description: "",
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
