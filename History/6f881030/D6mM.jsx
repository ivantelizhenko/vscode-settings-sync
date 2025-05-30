import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: #429ea6;
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  gap: 2.3rem;
`;

function AppLayout({ children }) {
  return (
    <StyledAppLayout>
      {/* <Header /> */}
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
