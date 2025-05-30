import { pieces } from './data/pieces';
import { PieceProps } from './types/ChessTypes';

function Piece({ color, piece, ...delegated }: PieceProps) {
  const Component = pieces[color][piece];

  return (
    <div {...delegated}>
      <Component style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default Piece;
