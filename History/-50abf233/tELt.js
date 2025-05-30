import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  colors: [],
};

const rtkSlice = createSlice({
  name: 'rtk',
  initialState,
  reducers: {
    addOneColor(state, action) {
      console.log('hey');
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
addOneColor('red');

export default rtkSlice.reducer;

export const getColors = state => state.rtk.colors;
