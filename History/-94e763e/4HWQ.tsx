import { PropsWithChildren } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

type Button = PropsWithChildren<{
  to: string;
}>;

const StyledButton = styled.div``;

function Button({ to }: PropsWithChildrens) {
  return (
    <StyledButton>
      <Link to={}></Link>
    </StyledButton>
  );
}

export default Button;
