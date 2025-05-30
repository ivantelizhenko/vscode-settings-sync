import styled from "styled-components";

const StyledSearch = styled.div`
  position: absolute;
  display: flex;
  right: 50%;
  top: 0;
  transform: translateX(50%);
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
