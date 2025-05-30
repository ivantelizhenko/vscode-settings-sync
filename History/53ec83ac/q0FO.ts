import { BoardType } from '../../../types/BoardTypes';
import { SideColor } from '../../../types/StatusTypes';

export type GetActualInfoType = {
  board: BoardType;
  turn: SideColor;
  lastMove: { from: string; to: string; promotion?: string };
};
