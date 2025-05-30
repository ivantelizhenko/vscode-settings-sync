export type SideType = "X" | "O";
export type TileType = { type: SideType | null; id: string };
export type GameOverType = "win" | "lose" | "draw";

export type StoreState = {
  side: SideType | null;
  board: TileType[] | null;
  isGameOver: { type: GameOverType; message: string };
};

export type StoreContextValue = StoreState & {
  setSide: (side: SideType) => void;
  setBoard: (board: TileType[]) => void;
  setTile: (id: string) => void;
  setGameOver: (data: { type: GameOverType; message: string }) => void;
};

type SetSideType = {
  type: "side/set";
  payload: SideType;
};

type SetBoardType = {
  type: "board/set";
  payload: TileType[];
};
type SetTileType = {
  type: "tile/set";
  payload: string;
};
type SetGameOverType = {
  type: "gameOver/set";
  payload: { type: GameOverType; message: string };
};

export type Action = SetSideType | SetBoardType | SetTileType | SetGameOverType;
