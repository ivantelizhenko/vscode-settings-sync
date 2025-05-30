import styled from "styled-components";

const StyledGlobalNavBar = styled.div`
  display: flex;
  justify-content: space-between;

  grid-column: 1/-1;
`;

function GlobalNavBar() {
  return (
    <StyledGlobalNavBar>
      <div>Logo</div>
      <Search />
      <div>Search Input</div>
      <div>Login button</div>
    </StyledGlobalNavBar>
  );
}

export default GlobalNavBar;
