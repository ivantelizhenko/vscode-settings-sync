import { DndProvider } from 'react-dnd';
import Field from './Field';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AreaType } from '../store/BoardSlice';

function Fields() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" flex gap-[2.4rem] overflow-hidden h-full">
        <Field title={AreaType.ToDo} />
        <Field title={AreaType.InProgress} />
        <Field title={AreaType.Done} />
      </div>
    </DndProvider>
  );
}

export default Fields;
