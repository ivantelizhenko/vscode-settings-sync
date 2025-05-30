import styled from 'styled-components';

type InputProps = {
  label: string;
  type: string;
};

const StyledInput = styled.div``;

function Input({ label, type }: InputProps) {
  return (
    <StyledInput>
      <label>label</label>
      <input type={}></input>
    </StyledInput>
  );
}

export default Input;
