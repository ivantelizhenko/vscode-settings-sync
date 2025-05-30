import styled from 'styled-components';

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0.8rem;
  padding: 0.8rem;
`;

const Header = styled.div`
  background-color: orange;
  grid-column: 1/-1;
`;

const Main = styled.div`
  background-color: yellow;
`;
const Aside = styled.div`
  /* max-width: calc(var(--left-sidebar-width) * 1px); */
  max-width: 313px;
  background-color: red;
`;
const Ad = styled.div`
  background-color: purple;
  grid-column: 1/-1;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header>Header</Header>
      <Aside>Aside</Aside>
      <Main>Main</Main>
      <Ad>Ad</Ad>
    </StyledAppLayout>
  );
}

export default AppLayout;
