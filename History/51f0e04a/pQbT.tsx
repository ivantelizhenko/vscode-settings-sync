import styled from 'styled-components';

type InputProps = {
  label: string;
  type: string;
  defaultValue: string;
};

const StyledInput = styled.div``;

function Input({ label, type, defaultValue = '' }: InputProps) {
  return (
    <StyledInput>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} defaultValue={defaultValue}></input>
    </StyledInput>
  );
}

export default Input;
