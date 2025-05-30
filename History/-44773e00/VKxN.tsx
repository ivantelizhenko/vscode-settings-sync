import { ChangeEvent } from 'react';

type InputFieldProps = {
  name: string;
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

function InputField({
  name,
  title,
  value,
  onChange,
  options,
}: InputFieldProps) {
  return (
    <>
      <label htmlFor={name}>{title}:</label>
      <select id={name} name={name} value={value} onChange={onChange} required>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Science">Science</option>
      </select>
    </>
  );
}

export default InputField;
