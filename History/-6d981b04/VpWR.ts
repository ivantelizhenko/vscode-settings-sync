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
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      console.log("hey");
      state.items = state.items.filter((item) => item.id === action.payload);
    },
  },
  extraReducers: (builder) => builder.addCase,
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
