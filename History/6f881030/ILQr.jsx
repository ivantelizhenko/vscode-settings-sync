import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: green;
`;

const Main = styled.main`
  background-color: #429ea6;
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  width: 120rem;
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
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
