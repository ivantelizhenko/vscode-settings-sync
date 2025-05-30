import styled from "styled-components";
import Heading from "./Heading";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9.6rem 4.8rem;
  height: 100vh;
  color: #ecebe4;
  font-family: sans-serif;
  background-color: #153b50;
`;

const Main = styled.main`
  /* padding: 4rem 4.8rem 6.4rem; */
  overflow: hidden;
  background-color: #429ea6;
  margin: auto 0;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2.3rem;
  background-color: red;
`;

function AppLayout({ children }) {
  return (
    <StyledAppLayout>
      <Heading as="h1">Carousel</Heading>
      <Main>
        <Container>
          <div>{children}</div>
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
