import { createSlice } from "@reduxjs/toolkit";

type StateType = { title: string; description: string };

const initialState: StateType = {
  title: "",
  description: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    name() {},
})
