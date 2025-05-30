export type SideType = "X" | "O";
export type TileType = { type: SideType | null; id: string };

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
