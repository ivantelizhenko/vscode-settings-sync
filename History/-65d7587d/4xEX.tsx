import Area from './Area';
import Heading from './Heading';

type FieldProps = {
  title: string;
};

function Field({ title }: FieldProps) {
  console.log(title.replace(' ', ''));
  return (
    <div className="flex flex-col gap-[1.2rem] w-full h-full  ">
      <Heading as="h2" className="text-center">
        {title}
      </Heading>
      <Area className="h-full" type={title.replace(' ', '')} />
    </div>
  );
}

export default Field;
