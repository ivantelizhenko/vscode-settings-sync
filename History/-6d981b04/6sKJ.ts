import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type CartItem = { id: string; title: string; price: number; quantity: number };

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [
    { id: "asds", title: "title1", price: 10, quantity: 10 },
    { id: "bvbvbnf", title: "title2", price: 20, quantity: 5 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      state.items.push({ ...action.payload, quantity: 10 });
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
