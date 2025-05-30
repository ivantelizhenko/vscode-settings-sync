import { useDroppable } from '@dnd-kit/core';

function Droppable({ children }: { children: ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    backgroundColor: isOver ? 'lightgreen' : 'lightblue',
  };

  return (
    <Drop ref={setNodeRef} style={style}>
      {children}
    </Drop>
  );
}

export default Droppable;
