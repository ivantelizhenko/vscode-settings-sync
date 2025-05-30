import { SideColor } from '../../../types/StatusTypes';

import { pieces } from './pieces';

export interface PieceProps extends React.HTMLAttributes<HTMLDivElement> {
  color: SideColor;
  piece: PieceFigures;
}

function Piece({ color, piece, ...delegated }: PieceProps) {
  const Component = pieces[color][piece];

  return (
    <div {...delegated}>
      <Component />
    </div>
  );
}

export default Piece;
