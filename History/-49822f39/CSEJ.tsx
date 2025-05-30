import styled from 'styled-components';

type MessageProps = PropsWithChildren

const StyledMessage = styled.p``;

function Message{children}:) {
  return <StyledMessage>{children}</StyledMessage>;
}

export default Message;
