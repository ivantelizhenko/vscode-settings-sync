import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: flex-start;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  gap: 1.2rem;

  font-weight: 700;
  text-decoration: none;

  color: var(--text-subdued);
  background-color: transparent;
  border: 0;
  border-radius: 9999px;

  transition: all 0.2s;

  &:hover {
    color: var(--test-base);

    // for button-icon
    background-color: var(--background-highlight);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  // ???
  flex-shrink: 0;
`;

function Button({ icon = '', children }) {
  return (
    <StyledButton withText={Boolean(children)}>
      {icon ? <span>{icon}</span> : ''}
      {children}
    </StyledButton>
  );
}

export default Button;
