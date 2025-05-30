import styled from 'styled-components';

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  gap: 0.8rem;
`;

const Header = styled.div`
  background-color: purple;
`;

const Logo = styled.div`
  background-color: orange;
`;
const Main = styled.div`
  background-color: yellow;
`;
const Aside = styled.div`
  background-color: green;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Logo>Logo</Logo>
      <Header>Header</Header>
      <Aside>Aside</Aside>
      <Main>Main</Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
