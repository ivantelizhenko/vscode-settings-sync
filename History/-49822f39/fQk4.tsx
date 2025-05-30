import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type MessageProps = PropsWithChildren & {
  textSize: string;
};

const StyledMessage = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 2rem 0 1rem;
`;

function Message({ children, textSize = '1.4rem' }: MessageProps) {
  return <StyledMessage $textSize={textSize}>{children}</StyledMessage>;
}

export default Message;
