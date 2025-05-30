import styled from "styled-components";

const StyledButtonLanguage = styled.button`
  margin-bottom: 3.2rem;
  padding: 0 2.4rem;
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
