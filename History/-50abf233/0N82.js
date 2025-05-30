import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  colors: [],
  fetchData: [],
};

const rtkSlice = createSlice({
  name: 'rtk',
  initialState,
  reducers: {
    addOneColor(state, action) {
      state.colors.push(action.payload);
    },
    addTwoColor: {
      prepare(firstColor, secondColor) {
        return { payload: [firstColor, secondColor] };
      },
      reducer(state, action) {
        state.colors = state.colors.concat(action.payload);
      },
    },
  },
});
export const { addOneColor, addTwoColor } = rtkSlice.actions;

export default rtkSlice.reducer;

export const getColors = state => state.rtk.colors;
