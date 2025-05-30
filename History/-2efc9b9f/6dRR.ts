import { createSlice } from '@reduxjs/toolkit';
import { StateType } from '../types/TimeType';

const initialState: StateType = {
  time: { white: 600, black: 600 },
  turn: 'w',
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    runTime(state) {
      if (state.turn === 'w') {
        state.time.white -= 1;
      }
      if (state.turn === 'b') {
        state.time.black -= 1;
      }
    },
  },
});

export const { runTime } = timeSlice.actions;

export default timeSlice.reducer;
