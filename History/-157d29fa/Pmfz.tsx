import styled from 'styled-components';

const StyledButton = styled.button``;

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
