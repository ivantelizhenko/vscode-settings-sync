import { pieces } from './data/pieces';
import { PieceProps } from './types/ChessTypes';

function Piece({ color, piece, ...delegated }: PieceProps) {
  console.log(color, piece);
  const Component = pieces[color][piece];

  return (
    <div {...delegated}>
      <Component />
    </div>
  );
}

export default Piece;
