import BishopBlack from './figures/BishopBlack';
import BishopWhite from './figures/BishopWhite';
import KingBlack from './figures/KingBlack';
import KingWhite from './figures/KingWhite';
import KnightBlack from './figures/KnightBlack';
import KnightWhite from './figures/KnightWhite';
import PawnBlack from './figures/PawnBlack';
import PawnWhite from './figures/PawnWhite';
import QueenBlack from './figures/QueenBlack';
import QueenWhite from './figures/QueenWhite';
import RookBlack from './figures/RookBlack';
import RookWhite from './figures/RookWhite';
import { PieceProps, PieceType } from './Piece';

export const pieces: { [x: 'w' | 'b']: PieceType } = {
  w: {
    P: PawnWhite,
    N: KnightWhite,
    R: RookWhite,
    B: BishopWhite,
    K: KingWhite,
    Q: QueenWhite,
  },
  b: {
    p: PawnBlack,
    n: KnightBlack,
    r: RookBlack,
    b: BishopBlack,
    k: KingBlack,
    q: QueenBlack,
  },
};
