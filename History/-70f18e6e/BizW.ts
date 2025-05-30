import { SideColor } from './StatusTypes';

export type StateType = {
  time: { white: number | null; black: number | null };
  extraSeconds: number;
  turn: SideColor;
  isStartTimer: boolean;
};
