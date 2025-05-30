import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
