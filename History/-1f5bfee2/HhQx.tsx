function Select({ options }: { options: string[] }) {
  return (
    <select defaultValue={options.at(0)} className="select">
      {options.map(opt => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}

export default Select;
