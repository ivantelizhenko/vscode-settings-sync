export type SideType = "X" | "O";
export type TileType = { type: SideType | null; id: string };

export type StoreState = {
  side: SideType | null;
  board: TileType[] | null;
  isGameOver: { type: "win" | "lose" | "draw"; message: string };
};

export type StoreContextValue = StoreState & {
  setSide: (side: SideType) => void;
  setBoard: (board: TileType[]) => void;
  setTile: (id: string) => void;
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
type SetTileType = {
  type: "tile/set";
  payload: string;
};

export type Action = SetSideType | SetBoardType | SetTileType;
