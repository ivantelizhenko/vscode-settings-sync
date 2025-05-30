import styled from "styled-components";
import Heading from "./Heading";

const StyledAppLayout = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;
  flex-direction: column;
  background-color: green;
  padding: 6.4rem 4.8rem;
`;

const Main = styled.main`
  background-color: #429ea6;
  padding: 4rem 4.8rem 6.4rem;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  background-color: red;
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
