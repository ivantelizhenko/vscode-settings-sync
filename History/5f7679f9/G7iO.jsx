import styled from "styled-components";

const StyledButtonLanguage = styled.button`
  font-weight: 700;
  background-color: transparent;
  border: 1px solid var(--text-subdued);
  border-radius: 9999px;
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
