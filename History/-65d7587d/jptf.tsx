import { Droppable } from 'react-beautiful-dnd';
import { AreaType } from '../store/ListSlice';
import Area from './Area';
import Heading from './Heading';

type FieldProps = {
  title: string;
};

function Field({ title }: FieldProps) {
  const type = title.replace(' ', '');
  return (
    <Droppable droppableId={type}>
      {(provided, snapshot) => (
        <div
          className="flex flex-col gap-[1.2rem] w-full"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Heading as="h2" className="text-center">
            {title}
          </Heading>
          <Area className="h-full" type={type as AreaType} />
        </div>
      )}
    </Droppable>
  );
}

export default Field;
