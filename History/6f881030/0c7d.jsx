import styled from "styled-components";

const StyledAppLayout = styled.div`
  height: 100vh;
  background-color: green;
`;

const Main = styled.main`
  background-color: #0a0d0e;
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 100%;
  background-color: red;
  margin: 0 auto;
  display: flex;
  /* flex-direction: column; */
  gap: 2.3rem;
`;

function AppLayout({ children }) {
  return (
    <StyledAppLayout>
      {/* <Header /> */}
      <Main>
        <Container>
          <div>{children}</div>
          <div>{children}</div>
          <div>{children}</div>
          <div>{children}</div>
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
