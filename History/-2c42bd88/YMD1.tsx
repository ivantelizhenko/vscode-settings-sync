import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick: () => void;
  width: string;
} & PropsWithChildren;

const StyledButtonOrdinary = styled.button<ButtonProps>`
  padding: 1rem;
  display: flex;

  width: ${props => props.width};
  align-items: center;
  justify-content: center;
  height: 100%;

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
