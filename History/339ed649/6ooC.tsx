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
    <div>
      <p>{children}</p>
      <Button onClick={onSubmit}>Yes</Button>
      <Button onClick={onReject}>No</Button>
    </div>
  );
}

const Button = styled(DefaultButton)``;

export default QuestionWindow;
