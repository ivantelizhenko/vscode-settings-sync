import styled from "styled-components";

const StyledSearch = styled.div`
  position: absolute;
  display: flex;
  right: 50%;
  top: 0;

  transform: translate(50%, 50%);
  background-color: red;
`;

const Form = styled.form``;

function Search() {
  return (
    <StyledSearch>
      <div>Button</div>

      <Form>
        <button>button1</button>
        <input />
      </Form>
    </StyledSearch>
  );
}

export default Search;
