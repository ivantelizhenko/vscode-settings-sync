export type SideType = "X" | "O";
export type TileType = SideType | null;

export type StoreState = {
  side: SideType | null;
  board: TileType[] | null;
};

export type StoreContextValue = StoreState & {
  setSide: (side: SideType) => void;
  setBoard: (board: TileType[]) => void;
};

type SetSideType = {
  type: "side/set";
  payload: SideType;
};

type SetBoardType = {
  type: "board/set";
  payload: TileType[];
};

export type Action = SetSideType | SetBoardType;
