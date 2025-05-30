import { pieces } from './data/pieces';
import { PieceProps } from './types/ChessTypes';

function Piece({ color, piece, column, row, ...delegated }: PieceProps) {
  const Component = pieces[color][piece];

  return (
    <div
      {...delegated} // onDragEnd={handleDragEnd}
      draggable={true}
      onDragStart={handleDragStart}
    >
      <Component />
    </div>
  );
}

export default Piece;
