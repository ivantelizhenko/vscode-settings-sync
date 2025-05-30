import { PropsWithChildren } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{
  to: string;
}>;

const StyledButton = styled.div`
  padding: 1rem;
  width: 20rem;
  border: 1px solid #c4c4c4;

  & a:link, & a: {
  }
`;

function Button({ to, children }: ButtonProps) {
  return (
    <StyledButton>
      <Link to={to}>{children}</Link>
    </StyledButton>
  );
}

export default Button;
