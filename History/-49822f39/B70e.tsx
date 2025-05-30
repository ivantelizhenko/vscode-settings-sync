import { PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';

type MessageProps = PropsWithChildren;

const fadeIn = keyframes`
from {
      opacity: 0;
      height: 0%;
    }
    to {
      height: 100%;
      opacity: 1;
    }`;

const StyledMessage = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 2rem 0 1rem;

  animation: ${fadeIn} 2s infinite;
`;

function Message({ children }: MessageProps) {
  return <StyledMessage>{children}</StyledMessage>;
}

export default Message;
