function Select({ options }) {
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
