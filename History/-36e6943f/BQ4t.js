import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsFromAPI } from "./services/getProductsFromAPI";
import { postProductToAPI } from "./services/postProductToAPI";
import { removeProductFromAPI } from "./services/removeProductFromApi";

const initialState = {
  status: "idle",
  products: [],
  currentProduct: {},
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async function () {
    const data = await getProductsFromAPI();
    return data;
  }
);

export const addProduct = createAsyncThunk(
  "products/postProducts",
  async function (data) {
    await postProductToAPI(data);
  }
);
export const deleteProduct = createAsyncThunk(
  "products/removeProducts",
  async function (id) {
    await removeProductFromAPI(id);
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
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
        state.error = "Something went wrong with getting products ";
      })
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(addProduct.rejected, (state) => {
        state.status = "error";
        state.error = "Something went wrong with sending product ";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (prod) => prod.id !== action.payload
        );
        console.log("hey");
        state.status = "idle";
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.status = "error";
        state.error = "Something went wrong with deleting product ";
      }),
});

export const { removeProduct, setCurrentProduct } = productsSlice.actions;

export default productsSlice.reducer;
