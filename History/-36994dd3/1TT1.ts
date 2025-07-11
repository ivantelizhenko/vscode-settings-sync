export type SideColor = 'w' | 'b';

export type StateType = {
  isGameOver: { is: boolean; message: string; type: GameOverType | null };
  offerDraw: { from: SideColor | null };
  side: SideColor;
  id: string | null;
};

export type GameOverType = 'win' | 'draw';
