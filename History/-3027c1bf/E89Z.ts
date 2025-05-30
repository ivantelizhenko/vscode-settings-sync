import { ColumnType, PieceType, RowType } from '../../../../types/BoardTypes';

type Tile<P extends PieceType | null> = {
  column: ColumnType;
  row: RowType;
  piece: P;
};

export type TileType = Tile<PieceType | null>;
export type TileWithPiece = Tile<PieceType>;
