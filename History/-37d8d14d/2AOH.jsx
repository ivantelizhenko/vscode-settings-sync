import styled from "styled-components";

const Main = styled.div`
  background-color: #153b50;
  color: #f9f9f9;
  height: 100vh;
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  gap: 2.3rem;
`;

function Continer({ children }) {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
}

export default Continer;
