import RookWhite from './Chess/figures/RookWhite';
import BishopBlack from './Chess/figures/BishopBlack';
import BishopWhite from './Chess/figures/BishopWhite';
import KingBlack from './Chess/figures/KingBlack';
import KingWhite from './Chess/figures/KingWhite';
import KnightBlack from './Chess/figures/KnightBlack';
import KnightWhite from './Chess/figures/KnightWhite';
import PawnBlack from './Chess/figures/PawnBlack';
import PawnWhite from './Chess/figures/PawnWhite';
import QueenBlack from './Chess/figures/QueenBlack';
import QueenWhite from './Chess/figures/QueenWhite';
import RookBlack from './Chess/figures/RookBlack';

export const pieces = {
  w: {
    p: PawnWhite,
    n: KnightWhite,
    r: RookWhite,
    b: BishopWhite,
    k: KingWhite,
    q: QueenWhite,
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
