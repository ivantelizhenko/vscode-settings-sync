import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  height: 4rem;
  justify-content: flexstart;
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
  }

  & span {
    /* margin-right: 1.2rem; */
  }

  // ???
  flex-shrink: 0;
`;

function Button({ icon = '', children }) {
  return (
    <StyledButton>
      {icon ? <span>{icon}</span> : ''}
      {children}
    </StyledButton>
  );
}

export default Button;
