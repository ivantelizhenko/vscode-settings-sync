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

  & a:link,
  & a:visited {
    color: #000;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
