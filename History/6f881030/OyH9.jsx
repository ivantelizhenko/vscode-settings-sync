import styled from "styled-components";
import Heading from "./Heading";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.4rem 4.8rem;
  height: 100vh;
  color: #ecebe4;
  font-family: sans-serif;
  background-color: #153b50;
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  overflow: hidden;
  background-color: #429ea6;
  margin-top: 12.8rem;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2.3rem;
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
