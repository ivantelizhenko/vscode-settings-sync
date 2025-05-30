import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameOverType, StateType } from '../types/StatusTypes';
import { SideColor } from '../types/ChessTypes';

const initialState: StateType = {
  isGameOver: { is: false, message: '', type: null },
  offerDraw: { from: null },
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
      state.isOpenModalWindow = 'gameOver';
    },
    doSurrender(state, action: PayloadAction<SideColor>) {
      const side = state.side === 'w' ? 'White' : 'Black';
      state.isGameOver = {
        is: true,
        message: `${side} surrender`,
        type: 'win',
      };
    },
    toOfferDraw(state) {
      state.offerDraw.from = state.side;
      state.isOpenModalWindow = 'offerDrawGet';
    },
    clearOfferDraw(state) {
      state.offerDraw.from = null;
    },
  },
});

export const { setGameOver, toOfferDraw, clearOfferDraw } = statusSlice.actions;

export default statusSlice.reducer;
