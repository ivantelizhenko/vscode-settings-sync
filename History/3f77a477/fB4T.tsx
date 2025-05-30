interface SelectProps {
  options: string[];
}

function Select({ options }: SelectProps) {
  return (
    <select className="select">
      {options.map(option => (
        <option>{option}</option>
      ))}
    </select>
  );
}

export default Select;
