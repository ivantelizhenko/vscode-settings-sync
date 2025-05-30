import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: [],
};

const rtkSlice = createSlice({
  name: 'rtk',
  initialState,
  reducers: {
    addOneColor(state, action) {
      state.color.push(action.payload);
    },
    addTwoColor: {
      prepare(firstColor, secondColor) {
        return { payload: [firstColor, secondColor] };
      },
      reducer(state, action) {
        state.color = state.color.concat(action.payload);
      },
    },
  },
});

export const { addOneColor, addTwoColor } = rtkSlice.reducer;

export default rtkSlice.reducer;
