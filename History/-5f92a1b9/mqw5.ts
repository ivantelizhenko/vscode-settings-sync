import type { SideType } from "../contexts/storeTypes";

export function createBoard() {
  const board: { type: SideType | null; id: string }[] = [
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

export const possibleWin = [
  [1, 2, 3],
  [3, 6, 9],
  [7, 8, 9],
  [1, 4, 7],
  [1, 5, 9],
  [3, 5, 7],
];
