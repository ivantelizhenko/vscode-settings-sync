function Select() {
  return  <select>
  {time.map(time => (
    <option key={time} value={time}>
      {time}
    </option>
     </select>
  ))}
}

export default Select;
