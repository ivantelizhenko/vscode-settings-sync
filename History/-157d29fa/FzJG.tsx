import { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

type ButtonProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  type?: 'submit' | 'reset' | 'button';
};

function Button({ children, type = 'button' }: ButtonProps) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

export default Button;
