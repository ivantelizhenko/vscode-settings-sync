import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

type ButtonProps = {
  onClick: () => void;
  width: string;
} & PropsWithChildren;

const StyledButtonOrdinary = styled(Button)`
  padding: 1rem;

  width: ${props => props.width};

  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: #c4c4c4;
  }
`;

function ButtonOrdinary({ onClick, children, width }: ButtonProps) {
  return (
    <StyledButtonOrdinary onClick={onClick} width={width}>
      {children}
    </StyledButtonOrdinary>
  );
}

export default ButtonOrdinary;
