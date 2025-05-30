import styled from "styled-components";
import Search from "./Search";
import Logo from "./Logo";
import LoginButtons from "./LoginButtons";

const StyledGlobalNavBar = styled.div`
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
