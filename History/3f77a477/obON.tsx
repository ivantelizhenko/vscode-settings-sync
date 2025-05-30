interface SelectProps {
  options: string[];
}

function Select({ options }: SelectProps) {
  return (
    <select className="select">
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
  );
}

export default Select;
