import Heading from './Heading';

function Select({ options, title }: { options: string[]; title: string }) {
  return (
    <>
      <Heading as="h4">{title}</Heading>
      <select defaultValue={options.at(0)} className="select">
        {options.map(opt => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </>
  );
}

export default Select;
