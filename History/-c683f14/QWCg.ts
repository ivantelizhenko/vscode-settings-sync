import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameOverType, SideColor, StateType } from '../types/StatusTypes';

const initialState: StateType = {
  isGameOver: { is: false, message: '', type: null },
  offerDraw: { from: null },
  side: null,
  gameId: null,
  userId: null,
  localStorageIDs: { gameId: null, userId: null },
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setGameOver(
      state,
      action: PayloadAction<{ message: string; type: GameOverType }>
    ) {
console.log('i here')
      state.isGameOver = {
        is: true,
{...action.payload}
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
    addIDs(state, action: PayloadAction<{ gameId: string; userId: string }>) {
      state.gameId = action.payload.gameId;
      state.userId = action.payload.userId;
    },
    addLocalStorageIDs(
      state,
      action: PayloadAction<{ gameId: string | null; userId: string | null }>
    ) {
      state.localStorageIDs = action.payload;
    },
    reset() {
      return initialState;
    },
    setSide(state, action: PayloadAction<SideColor>) {
      state.side = action.payload;
    },
  },
});

export const {
  setGameOver,
  toOfferDrawSend,
  clearOfferDraw,
  addIDs,
  addLocalStorageIDs,
  setSide,
  reset,
} = statusSlice.actions;

export default statusSlice.reducer;
