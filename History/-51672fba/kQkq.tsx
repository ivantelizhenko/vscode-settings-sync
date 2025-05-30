import { DragDropContext } from 'react-beautiful-dnd';
import Field from './Field';
import { useCallback } from 'react';

function Fields() {
  const onBeforeCapture = useCallback(() => {
    console.log('i before capture');
  }, []);
  const onBeforeDragStart = useCallback(() => {
    console.log('i drag before start');
  }, []);
  const onDragStart = useCallback(() => {
    console.log('i drag start');
  }, []);
  const onDragUpdate = useCallback(() => {
    console.log('i drag update');
  }, []);
  const onDragEnd = useCallback(result => {
    console.log('i drag end');
    const { source, destination, draggableId } = result;

    if (!destination) return; // Якщо елемент кинули не в зону droppable — нічого не робимо

    console.log(
      'Moved',
      draggableId,
      'from',
      source.droppableId,
      'to',
      destination.droppableId
    );

    // the only one that is required
  }, []);

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <div className=" flex gap-[2.4rem] overflow-hidden h-full">
        <Field title="ToDo" />

        <Field title="In Progress" />
        <Field title="Done" />
      </div>
    </DragDropContext>
  );
}

export default Fields;
