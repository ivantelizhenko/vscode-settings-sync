interface SelectProps {
  options: string[];
}

function Select({ options }: SelectProps) {
  return (
    <select className="w-full">
      {options.map(option => (
        <option>{option}</option>
      ))}
    </select>
  );
}

export default Select;
