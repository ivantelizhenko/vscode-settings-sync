import { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

type ButtonProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  type?: string;
};

function Button({ children, type = '' }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
