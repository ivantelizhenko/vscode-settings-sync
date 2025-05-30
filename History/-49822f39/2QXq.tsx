import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type MessageProps = PropsWithChildren;

const StyledMessage = styled.p``;

function Message({ children }: MessageProps) {
  return <StyledMessage>{children}</StyledMessage>;
}

export default Message;
