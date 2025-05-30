import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';
import { Button } from './Button';

type ButtonProps = PropsWithChildren<{
  to: string;
  width: string;
}>;

const StyledButtonLink = styled(Button)`
  a:link,
  a:visited {
    color: #000;
    padding: 1rem;
    width: 100%;
    text-align: center;
    transition: all 0.2s;
  }
  a:hover,
  a:active,
  .active {
    background-color: #c4c4c4;
  }
`;

function ButtonLink({ to, children, width }: ButtonProps) {
  return (
    <StyledButtonLink width={width}>
      <NavLink to={to}>{children}</NavLink>
    </StyledButtonLink>
  );
}

export default ButtonLink;
