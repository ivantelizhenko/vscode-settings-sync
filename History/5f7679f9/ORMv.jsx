import styled from "styled-components";

const StyledButtonLanguage = styled.button`
  font-weight: 700;
  background-color: transparent;
  border: 0.5px solid var(--text-subdued);
  border-radius: 9999px;
  display: flex;
  justify-content: space-between;
  gap: 0.3rem;
  align-items: center;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;

  & svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2rem;
    height: 2.2rem;
  }

  &:hover {
    outline: 0.5px solid var(--text-base);

    transform: scale(105%);
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
