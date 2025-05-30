import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
`;

const Logo = styled.div`
  background-color: orange;
`;
const LeftBar = styled.div`
  background-color: green;
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
