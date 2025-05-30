import styled from "styled-components";

const StyledSearch = styled.div`
  position: absolute;
  display: flex;
  right: 50%;
  top: 0;

  transform: translate(50%, 50%);
  background-color: red;
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
