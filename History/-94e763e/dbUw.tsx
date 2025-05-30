import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Button = PropsWithChildren<{}>;

const StyledButton = styled.div``;

function Button({ to }) {
  return (
    <StyledButton>
      <Link to={}></Link>
    </StyledButton>
  );
}

export default Button;
