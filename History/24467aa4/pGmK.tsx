import { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputFieldProps = {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ name, value, onChange }: InputFieldProps) {
  return (
    <>
      <label htmlFor={name}>Title:</label>
      <input id={name} name={name} value={value} onChange={onChange} required />
    </>
  );
}

export default InputField;
