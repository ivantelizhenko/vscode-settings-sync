import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<"number">) {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
