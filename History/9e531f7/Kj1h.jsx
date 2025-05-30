import styled from "styled-components";

const StyledSearch = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  left: 0;
`;

function Search() {
  return (
    <StyledSearch>
      <div>Button</div>
      <div>Search</div>

      <div>Button</div>
    </StyledSearch>
  );
}

export default Search;
