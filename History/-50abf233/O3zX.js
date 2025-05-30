import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: '',
};

const rtkSlice = createSlice({
  name: 'rtk',
  initialState,
  reducers: {
    setColor(state, action) {
      state.color = action.payload;
    },
  },
});
