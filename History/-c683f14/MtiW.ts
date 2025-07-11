import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { GameOverType, SideColor, StateType } from '../types/StatusTypes';

const initialState: StateType = {
  isGameOver: { is: false, message: '', type: null },
  offerDraw: { from: null },
  side: null,
  ids: { gameId: null, userId: null },
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
    createId(
      state,
      action: PayloadAction<{ gameId?: string; userId?: string }>
    ) {
      const { gameId, userId } = action.payload;

      state.id = nanoid();
    },
    deleteId(state) {
      state.id = null;
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
  createId,
  deleteId,
  setSide,
} = statusSlice.actions;

export default statusSlice.reducer;
