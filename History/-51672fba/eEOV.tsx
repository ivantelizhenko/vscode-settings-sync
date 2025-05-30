import { DragDropContext } from 'react-beautiful-dnd';
import Field from './Field';
import { useCallback } from 'react';

function Fields() {
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    console.log('i drag start');
  }, []);
  const onDragUpdate = useCallback(() => {
    console.log('i drag update');
  }, []);
  const onDragEnd = useCallback(() => {
    console.log('i drag end');

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
