import { SideColor } from './ChessTypes';

export type StateType = {
  time: { white: number; black: number };
  turn: SideColor;
};
