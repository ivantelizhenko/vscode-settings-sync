import styled from "styled-components";
import Search from "./Search";
import Logo from "./Logo";
import LoginButtons from "./LoginButtons";

const StyledGlobalNavBar = styled.div`
  display: flex;
  justify-content: space-between;

  grid-column: 1/-1;
  position: relative;
`;

function GlobalNavBar() {
  return (
    <StyledGlobalNavBar>
      <Logo />
      <Search />

      <LoginButtons />
    </StyledGlobalNavBar>
  );
}

export default GlobalNavBar;
