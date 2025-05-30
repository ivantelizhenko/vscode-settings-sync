import { pieces } from './data/pieces';
import { PieceProps } from './types/ChessTypes';

function Piece({ color, piece, ...delegated }: PieceProps) {
  const Component = pieces[color][piece];

  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({ color: piece?.color, name: piece?.name, column, row })
    );

    setTimeout(() => {
      (e.target as HTMLDivElement).style.display = 'none';
    }, 0);
    handleSelectTile();
  }

  function handleDragEnd(e: React.DragEvent<HTMLDivElement>) {
    (e.target as HTMLDivElement).style.display = 'block';
  }

  return (
    <div
      {...delegated}
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Component />
    </div>
  );
}

export default Piece;
