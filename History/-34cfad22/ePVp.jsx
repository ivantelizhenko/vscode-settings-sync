import styled from 'styled-components';

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LeftBar = styled.div`
  background-color: green;
`;

const RightBar = styled.div`
  background-color: purple;
`;

const Logo = styled.div`
  background-color: orange;
`;
const Main = styled.div`
  background-color: yellow;
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
