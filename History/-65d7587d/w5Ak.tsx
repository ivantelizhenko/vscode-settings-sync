import { Droppable } from 'react-beautiful-dnd';
import { AreaType } from '../store/ListSlice';
import Area from './Area';
import Heading from './Heading';

type FieldProps = {
  title: string;
};

function Field({ title }: FieldProps) {
  const type = title.replace(' ', '');
  return <Droppable droppableId={type} type="string"></Droppable>;
}

export default Field;
