import styled from 'styled-components';
import Navigation from './Navigation';

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto minmax(20rem, auto) auto;
  gap: 0.8rem;
  padding: 0.8rem;
  background-color: var(--color-black);
  h
`;

const Header = styled.div`
  background-color: orange;
  grid-column: 1/-1;
`;

const Main = styled.div`
  background-color: yellow;
  height: auto;

  // temporarily
  /* height: 80vh; */
`;

const Footer = styled.div`
  background-color: purple;
  grid-column: 1/-1;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header>Header</Header>
      <Navigation />
      <Main>Main</Main>
      <Footer>Ad</Footer>
    </StyledAppLayout>
  );
}

export default AppLayout;
