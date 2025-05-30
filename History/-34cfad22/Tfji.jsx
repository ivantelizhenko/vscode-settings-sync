import styled from "styled-components";
import LeftSideBar from "./LeftSideBar";
import GlobalNavBar from "./GlobalNavBar";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0.8rem;
  padding: 0.8rem;
  background-color: var(--color-black);
`;

const Header = styled.div`
  background-color: orange;
  grid-column: 1/-1;
`;

const Main = styled.div`
  background-color: yellow;

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
      <GlobalNavBar />
      <LeftSideBar />
      <Main>Main</Main>
      <Footer>Ad</Footer>
    </StyledAppLayout>
  );
}

export default AppLayout;
