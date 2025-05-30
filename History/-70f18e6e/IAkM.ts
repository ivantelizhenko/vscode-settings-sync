import { SideColor } from './BoardTypes';

export type StateType = {
  time: { white: number; black: number };
  turn: SideColor;
};
