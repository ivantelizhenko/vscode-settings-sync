import { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputProps = {
  label: string;
  type: string;
  required: true | false;
  defaultValue: string | undefined;
  handleChange: (e: ChangeEvent<HTMLFormElement>) => void;
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
  padding: 1.6rem 4.8rem 1.6rem 2.4rem;
  color: #5e626b;
  font-size: 1.4rem;
  line-height: 2rem;
  border: 1px #e3e8ee solid;
`;

function Input({
  label,
  type,
  defaultValue = '',
  handleChange,
  required = { required },
}: InputProps) {
  return (
    <StyledInputBox onChange={handleChange}>
      <label htmlFor={label}>{label}</label>
      <StyledInput
        type={type}
        id={label}
        defaultValue={defaultValue}
        required
      />
    </StyledInputBox>
  );
}

export default Input;
