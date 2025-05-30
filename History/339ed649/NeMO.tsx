import { ReactNode } from 'react';
import DefaultButton from './DefaultButton';
import styled from 'styled-components';

interface QuestionWindowProps {
  children: ReactNode;
  onSubmit: () => void;
  onReject: () => void;
}

function QuestionWindow({ children, onSubmit, onReject }: QuestionWindowProps) {
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
`;

const Button = styled(DefaultButton)``;

export default QuestionWindow;
