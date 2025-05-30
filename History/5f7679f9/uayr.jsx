import styled from "styled-components";

const StyledButtonLanguage = styled.button`
  font-weight: 700;
  background-color: transparent;
  border: 1px solid var(--text-subdued);
  border-radius: 9999px;
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  align-items: center;
  padding: 3px 15px;
  font-size: 1.4rem;

  & svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    border-color: var(--text-base);
  }
`;

// props.language get from global state
function ButtonLanguage({ icon, language }) {
  return (
    <StyledButtonLanguage>
      <span>{icon}</span> {language}
    </StyledButtonLanguage>
  );
}

export default ButtonLanguage;
