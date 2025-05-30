import { pieces } from './data/pieces';
import { PieceProps } from './types/ChessTypes';

import { DragEvent } from 'react';

function Piece({ color, piece, ...delegated }: PieceProps) {
  const Component = pieces[color][piece];

  function handleDragStart(e: DragEvent) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData(
      'text/plain',
      `color: ${color}, piece: ${piece}, column: ${column}, row: ${row}`
    );

    const target = e.target as HTMLDivElement;
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  }

  // function handleDragEnd(e: DragEvent) {
  //   const target = e.target as HTMLDivElement;
  //   setTimeout(() => {
  //     target.style.display = 'revert';
  //   }, 0);
  // }

  return (
    <div {...delegated}>
      <Component />
    </div>
  );
}

export default Piece;
