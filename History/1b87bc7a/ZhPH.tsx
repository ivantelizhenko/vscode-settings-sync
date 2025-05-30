import styled, { css } from 'styled-components';
import { FormEvent, ReactNode } from 'react';

import Heading from './Heading';

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

  .formHeading {
  }
`;

const FormHeading = styled.header<{ alignHeadingCenter: boolean }>`
  ${props =>
    props.alignHeadingCenter &&
    css`
      display: flex;
      justify-content: center;
    `}
`;

const InputsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 8rem;
  column-gap: 2rem;
`;

function Form({
  title,
  children,
  handleSubmit,
  alignHeadingCenter = false,
}: FormProps) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputsBox>{children}</InputsBox>
    </StyledForm>
  );
}

export default Form;
