import { TileType } from '../chess/components/board/Tile';
import { SideColor } from './StatusTypes';

export type StateType = {
  board: TileType[];
  selectedTile: TileType | null;
  possibleMovesForPiece: PossibleMoveData[];
  prevTwoMoves: PrevMoveObject[];
  promotionPiece: Omit<PieceFigures, 'k' | 'p'> | null;
};

export type RowType = '8' | '7' | '6' | '5' | '4' | '3' | '2' | '1';
export type ColumnType = 'h' | 'g' | 'f' | 'e' | 'd' | 'c' | 'b' | 'a';
export type PieceFigures = 'p' | 'n' | 'r' | 'b' | 'q' | 'k';

export interface PieceType {
  name: PieceFigures;
  color: SideColor;
}

export type TileWithoutPieceType = Omit<TileType, 'piece'>;

export interface PieceProps extends React.HTMLAttributes<HTMLDivElement> {
  color: SideColor;
  piece: PieceFigures;
}

export type PrevMoveObject = { from: string; to: string; piece: PieceFigures };

export type PossibleMoveData = {
  from: string;
  to: string;
  name: string;
  attackedPiece: PieceFigures | null;
};
