import { AreaType } from '../store/BoardSlice';
import Area from '../features/Area';
import Heading from './Heading';

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
      <Area className="h-full" type={AreaType[type as keyof typeof AreaType]} />
    </div>
  );
}

export default Field;
