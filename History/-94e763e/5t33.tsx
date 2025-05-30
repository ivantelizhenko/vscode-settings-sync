import { PropsWithChildren } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{
  to: string;
}>;

const StyledButton = styled.div``;

function Button({ to, children }: ButtonProps) {
  return (
    <StyledButton>
      <Link to={to}>{children}</Link>
    </StyledButton>
  );
}

export default Button;
