export type StoreState = {
  side: SideType | null;
  board: TileType[];
};

export type StoreContextValue = StoreState & {
  setSide: (side: SideType) => void;
};

type SetSideType = {
  type: "side/set";
  payload: SideType;
};

export type Action = SetSideType;

type SideType = "X" | "O";
type TileType = SideType | null;
