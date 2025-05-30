import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProducts } from "./services/getProducts";
import { setProducts } from "./services/syncProduct";

const initialState = {
  status: "idle",
  products: [],
  currentProduct: {},
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async function () {
    const data = await getProducts();
    return data;
  }
);
export const postProducts = createAsyncThunk(
  "products/postProducts",
  async function (data) {
    const data = await setProducts(data);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      // action.payload === product.id
      state.products = state.products.filter(
        (prod) => prod.id !== action.payload
      );
    },
    setCurrentProduct(state, action) {
      // action.payload === product.id
      state.currentProduct = state.products.find(
        (prod) => prod.id === action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
        state.error = "Something went wrong with fetching products ";
      })
      .addCase(postProducts.fulfilled, (state, action) => {
        state.status = "idle";
      }),
});

export const { addProduct, removeProduct, setCurrentProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
