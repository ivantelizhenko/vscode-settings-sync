import Heading from './Heading';

function Select({ options, title }: { options: string[]; title: string }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Heading as="h4">{title}</Heading>
      <select defaultValue={options.at(0)} className="select w-full">
        {options.map(opt => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
