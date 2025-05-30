import styled from 'styled-components';
import { FormEvent, ReactNode } from 'react';

type FormProps = {
  title: string;
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
  alignHeadingCenter?: boolean;
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
  row-gap: 8rem;
  column-gap: 2rem;
`;

function Form({ children, handleSubmit }: FormProps) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputsBox>{children}</InputsBox>
    </StyledForm>
  );
}

export default Form;
