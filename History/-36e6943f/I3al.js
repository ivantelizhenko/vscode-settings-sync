import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addProduct } from "./services/addProduct";

const initialState = {
  status: "idle",
  products: [],
  currentProduct: {},
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async function () {
    const data = await getProducts();
    return data;
  }
);

export const postProduct = createAsyncThunk(
  "products/postProducts",
  async function (data) {
    await addProduct(data);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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
      .addCase(postProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postProducts.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(postProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = "Something went wrong with fetching products ";
      }),
});

export const { removeProduct, setCurrentProduct } = productsSlice.actions;

export default productsSlice.reducer;
