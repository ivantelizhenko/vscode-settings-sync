import styled from "styled-components";
import Search from "./Search";

const StyledGlobalNavBar = styled.div`
  display: flex;
  justify-content: space-between;

  grid-column: 1/-1;
  position: relative;
`;

function GlobalNavBar() {
  return (
    <StyledGlobalNavBar>
      <div>Logo</div>
      <Search />

      <div>Login button</div>
    </StyledGlobalNavBar>
  );
}

export default GlobalNavBar;
