import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: [],
};

const rtkSlice = createSlice({
  name: 'rtk',
  initialState,
  reducers: {
    addColor(state, action) {
      state.color.push(action.payload);
    },
    addTwoColor: {
      prepare(firstColor, secondColor) {
        return { payload: [firstColor, secondColor] };
      },
    },
  },
});
