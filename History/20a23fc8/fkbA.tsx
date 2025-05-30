import { PieceProps } from './ChessTypes';
import { pieces } from './pieces';
import { DragEvent, useState } from 'react';

function Piece({ color, piece, column, row }: PieceProps) {
  const [isDragging, setIsDragging] = useState(false);

  const Component = pieces[color][piece];
  function handleDragStart(e: DragEvent) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData(
      'text/plain',
      `color: ${color}, piece: ${piece}, column: ${column}, row: ${row}`
    );
    setIsDragging(true);
    console.log(e);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ display: isDragging ? 'none' : 'block' }}
    >
      <Component />
    </div>
  );
}

export default Piece;
