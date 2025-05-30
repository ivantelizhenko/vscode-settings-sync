import styled from 'styled-components';
import { FormEvent, ReactNode } from 'react';

type FormProps = {
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
  type = 'user/edit' | 'user/add'
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const InputsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  ${{type} => }
  row-gap: 8rem;
  column-gap: 2rem;
`;

function Form({ children, handleSubmit, type }: FormProps) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputsBox $type={type}>{children}</InputsBox>
    </StyledForm>
  );
}

export default Form;
