import { AreaType } from '../store/BoardSlice';
import Area from './Area';
import Heading from '../ui/Heading';

type FieldProps = {
  title: string;
  type: string;
};

function Field({ title, type }: FieldProps) {
  return (
    <div className="flex flex-col gap-[1.2rem] w-full">
      <Heading as="h2" className="text-center">
        {title}
      </Heading>
      <Area className="h-full" type={AreaType[type]} />
    </div>
  );
}

export default Field;
