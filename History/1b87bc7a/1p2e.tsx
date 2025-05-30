import styled, { css } from 'styled-components';
import { FormEvent, ReactNode } from 'react';

type FormProps = {
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
  type: 'user/edit' | 'user/add';
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const InputsBox = styled.div<{ $type: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  &[as] {
    background-color: red;
  }

  ${props =>
    props.$type === 'user/edit' &&
    css`
      row-gap: 8rem;
      column-gap: 2rem;
    `}
  ${props =>
    props.$type === 'user/add' &&
    css`
      row-gap: 8rem;
      column-gap: 2rem;
    `}
`;

function Form({ children, handleSubmit, type }: FormProps) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputsBox $type={type}>{children}</InputsBox>
    </StyledForm>
  );
}

export default Form;
