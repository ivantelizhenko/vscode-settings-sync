import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  height: 4rem;
  justify-content: flex-start;
  padding: 0.4rem 0.8rem;
  cursor: pointer;

  font-weight: 700;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;

  color: var(--text-subdued);
  background-color: transparent;
  border: 0;
  border-radius: 9999px;

  transition: all 0.2s;

  &:hover {
    color: var(--test-base);
  }

  // ???
  flex-shrink: 0;
`;

function Button({ icon = '', children }) {
  return (
    <StyledButton>
      <span></span>
      {children}
    </StyledButton>
  );
}

export default Button;
