import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Button = PropsWithChildren<{
  to: string;
}>;

const StyledButton = styled.div``;

function Button({ to }: PropsWithChildren) {
  return (
    <StyledButton>
      <Link to={}></Link>
    </StyledButton>
  );
}

export default Button;
