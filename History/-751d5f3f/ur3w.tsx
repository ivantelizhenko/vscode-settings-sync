function Select({
  options,
}: {
  options: { title: string; value: string; id: string }[];
}) {
  return (
    <select>
      {options.map(({ title, value, id }) => (
        <option key={id} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
}

export default Select;
