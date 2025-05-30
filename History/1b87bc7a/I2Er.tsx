import styled from 'styled-components';
import { FormEvent, ReactNode } from 'react';

import Heading from './Heading';

type FormProps = {
  title: string;
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
  alignCenter?: boolean;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .formHeading {
  }
`;

const InputsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 8rem;
  column-gap: 2rem;
`;

function Form({ title, children, handleSubmit, alignCenter }: FormProps) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="formHeading" alignCenter={alignCenter}>
        <Heading as="h3">{title}</Heading>
      </div>
      <InputsBox>{children}</InputsBox>
    </StyledForm>
  );
}

export default Form;
