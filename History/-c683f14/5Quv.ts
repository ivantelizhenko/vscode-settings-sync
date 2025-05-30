import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameOverType, StateType } from '../types/StatusTypes';

const initialState: StateType = {
  isGameOver: { is: false, message: '', type: null },
  offerDraw: { from: null },
  side: 'w',
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setGameOver(
      state,
      action: PayloadAction<{ message: string; type: GameOverType }>
    ) {
      state.isGameOver = {
        is: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    doSurrender(state) {
      const side = state.side === 'w' ? 'White' : 'Black';
      state.isGameOver = {
        is: true,
        message: `${side} surrender`,
        type: 'win',
      };
    },
    toOfferDrawSend(state) {
      state.offerDraw.from = state.side;
    },
    clearOfferDraw(state) {
      state.offerDraw.from = null;
    },
  },
});

export const { setGameOver, toOfferDrawSend, clearOfferDraw } =
  statusSlice.actions;

export default statusSlice.reducer;
