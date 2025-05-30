import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #153b50;
  color: #f9f9f9;
  height: 100vh;
  padding: 4rem 4.8rem 6.4rem;
`;

function Continer({ children }) {
  return (
    <StyledContainer>
      <Main>{children}</Main>
    </StyledContainer>
  );
}

export default Continer;
