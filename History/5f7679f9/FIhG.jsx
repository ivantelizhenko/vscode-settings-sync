import styled from "styled-components";

const StyledButtonLanguage = styled.button``;

// props.language get from global state
function ButtonLanguage({ icon, language }) {
  return (
    <StyledButtonLanguage>
      <span>{icon}</span> {language}
    </StyledButtonLanguage>
  );
}

export default ButtonLanguage;
