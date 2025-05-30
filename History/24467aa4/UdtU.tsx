import { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputFieldProps = {
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ name, value, handleChange }: InputFieldProps) {
  return (
    <>
      <label htmlFor={name}>Title:</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
      ;
    </>
  );
}

export default InputField;
