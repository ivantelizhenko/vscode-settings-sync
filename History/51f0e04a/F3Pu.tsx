import { FormEvent } from 'react';
import styled from 'styled-components';

type InputProps = {
  label: string;
  type: string;
  defaultValue: string;
  handleChange: (e: FormEvent<HTMLFormElement>) => void;
};

const StyledInputBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 50rem;

  color: #5e626b;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const StyledInput = styled.input`
  padding: 0.8rem 1.2rem 0.8rem 2.4rem;
  color: #5e626b;
  font-size: 1.4rem;
  line-height: 2rem;
`;

function Input({ label, type, defaultValue = '', handleChange }: InputProps) {
  return (
    <StyledInputBox onChange={handleChange}>
      <label htmlFor={label}>{label}</label>
      <StyledInput type={type} id={label} defaultValue={defaultValue} />
    </StyledInputBox>
  );
}

export default Input;
