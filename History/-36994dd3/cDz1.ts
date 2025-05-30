import { SideColor } from './ChessTypes';

export type StateType = {
  isGameOver: { is: boolean; message: string; type: GameOverType | null };
  offerDraw: { from: SideColor | null };
};

export type GameOverType = 'win' | 'draw';
