import type { TileType } from "../contexts/storeTypes";

export function createBoard() {
  const board: { type: TileType; id: string }[] = [
    { type: null, id: "a1snnvhf" },
    { type: null, id: "assnn2vhf" },
    { type: null, id: "asnn3vhf" },
    { type: null, id: "asnnv5hf" },
    { type: null, id: "as23nn4vhf" },
    { type: null, id: "asnn6vhf" },
    { type: null, id: "7asnnvhf" },
    { type: null, id: "a4sn8nvhf" },
    { type: null, id: "asn1nvhf" },
  ];

  return board;
}
