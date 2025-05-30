import { ChangeEvent } from 'react';

type InputFieldProps = {
  name: string;
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ name, title, value, onChange }: InputFieldProps) {
  return (
    <>
      <label htmlFor={name}>{title}:</label>
      <input id={name} name={name} value={value} onChange={onChange} required />
    </>
  );
}

export default InputField;
