import styled from 'styled-components';

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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
      <LeftBar>
        Left Bar
        {/* <Logo>Logo</Logo>
        <Aside>Left Main</Aside> */}
      </LeftBar>
      <RightBar>Right Bar</RightBar>
    </StyledAppLayout>
  );
}

export default AppLayout;
