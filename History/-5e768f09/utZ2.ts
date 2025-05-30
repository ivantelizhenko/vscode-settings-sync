import BishopBlack from '../figures/BishopBlack';
import BishopWhite from '../figures/BishopWhite';
import KingBlack from '../figures/KingBlack';
import KingWhite from '../figures/KingWhite';
import KnightBlack from '../figures/KnightBlack';
import KnightWhite from '../figures/KnightWhite';
import PawnBlack from '../figures/PawnBlack';
import PawnWhite from '../figures/PawnWhite';
import QueenBlack from '../figures/QueenBlack';
import QueenWhite from '../figures/QueenWhite';
import RootBlack from '../figures/RootBlack';
import RootWhite from '../figures/RootWhite';

export const pieces = {
  white: {
    king: KingWhite,
    queen: QueenWhite,
    pawn: PawnWhite,
    bishop: BishopWhite,
    knignt: KnightWhite,
    root: RootWhite,
  },
  black: {
    king: KingBlack,
    queen: QueenBlack,
    pawn: PawnBlack,
    bishop: BishopBlack,
    knignt: KnightBlack,
    root: RootBlack,
  },
};
