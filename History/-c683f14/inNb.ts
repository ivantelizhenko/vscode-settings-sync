import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameOverType, SideColor, StateType } from '../types/StatusTypes';

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
      state.isOpenModalWindow = 'gameOver';
    },
    doSurrender(state, action: PayloadAction<SideColor>) {
      // action.payload === тей, хто здався

      const side = action.payload === 'w' ? 'White' : 'Black';
      state.isGameOver = {
        is: true,
        message: `${side} surrender`,
        type: 'win',
      };
    },
    toOfferDraw(state, action: PayloadAction<SideColor>) {
      // action.payload === тей, хто надіслав пропозицію нічиї

      state.offerDraw.from = action.payload;
      state.isOpenModalWindow = 'offerDrawGet';
    },
    clearOfferDraw(state) {
      state.offerDraw.from = null;
    },
  },
});

export const { setGameOver, toOfferDraw, clearOfferDraw } = statusSlice.actions;

export default statusSlice.reducer;
