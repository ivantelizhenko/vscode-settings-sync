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
import RookBlack from '../figures/RookBlack';
import RookWhite from '../figures/RookWhite';

const pieces = {
  white: {
    king: KingWhite,
    queen: QueenWhite,
    pawn: PawnWhite,
    bishop: BishopWhite,
    knight: KnightWhite,
    rook: RookWhite,
  },
  black: {
    king: KingBlack,
    queen: QueenBlack,
    pawn: PawnBlack,
    bishop: BishopBlack,
    knight: KnightBlack,
    rook: RookBlack,
  },
};

export interface PiecesProps {
  side: 'white' | 'black';
  type: 'rook' | 'king' | 'queen' | 'bishop' | 'knight' | 'pawn' | '';
  size: number;
}

function Pieces({ side, type, size }: PiecesProps) {
  const Component = pieces[side][type];

  return <Component size={size} />;
}

export default Pieces;
