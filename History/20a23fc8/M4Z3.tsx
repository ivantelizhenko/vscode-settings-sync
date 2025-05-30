import { pieces } from './pieces';
import { PieceProps } from '../../features/types/ChessTypes';

function Piece({ color, piece, ...delegated }: PieceProps) {
  const Component = pieces[color][piece];

  return (
    <div {...delegated}>
      <Component />
    </div>
  );
}

export default Piece;
