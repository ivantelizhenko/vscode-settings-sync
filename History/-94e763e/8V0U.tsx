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
      {to ? <Link to={to}>{children}</Link> : <button>{children}</button>}
    </StyledButton>
  );
}

export default Button;
