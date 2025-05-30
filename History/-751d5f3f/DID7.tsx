function Select({
  options,
}: {
  options: { title: string; value: string; id: string };
}) {
  return (
    <select>
      {options.map(time => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
}

export default Select;
