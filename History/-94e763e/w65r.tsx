import { PropsWithChildren } from 'react';
import { Link, NavLink } from 'react-router';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{
  to: string;
}>;

const StyledButton = styled.div`
  padding: 1rem;
  width: 20rem;
  border: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  a:link,
  a:visited {
    color: #000;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2rem;
  }
  &:hover,
  &:active {
    background-color: #c4c4c4;
  }
`;

function Button({ to, children }: ButtonProps) {
  return (
    <StyledButton>
      <NavLink to={to}>{children}</NavLink>
    </StyledButton>
  );
}

export default Button;
