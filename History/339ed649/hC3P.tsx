import { ReactNode } from 'react';
import DefaultButton from './DefaultButton';
import styled from 'styled-components';

interface QuestionProps {
  children: ReactNode;
  onSubmit: () => void;
  onReject: () => void;
}

function Question({ children, onSubmit, onReject }: QuestionProps) {
  return (
    <Wrapper>
      <p>{children}</p>

      <Button onClick={onSubmit}>Yes</Button>
      <Button onClick={onReject}>No</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: red;
  width: fit-content;
  height: fit-content;

  padding: 24px 48px;

  display: grid;
  row-gap: 12px;
  column-gap: 24px;
  grid-template-areas:
    'question question'
    'buttonYes buttonNo';

  & p {
    grid-area: question;
  }
`;

const Button = styled(DefaultButton)`
  width: 100%;
  text-align: center;
`;

export default Question;
