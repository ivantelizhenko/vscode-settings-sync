import styled from "styled-components";

const StyledSearch = styled.div`
  position: absolute;
  display: flex;
  right: 50%;
  top: 0;

  transform: translate(50%, 50%);
  background-color: red;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  /* padding-left: 3.6rem;
  padding-right: 6.4rem; */

  padding: 1.2rem 6.4rem 1.2rem 4.8rem;
  background: var(--background-elevated-base);
  border-radius: 500px;
  box-shadow: none;
  cursor: pointer;
  border: none;

  display: block;
  inline-size: 100%;

  &:focus {
    outline: 2px solid var(--text-subdued);
  }
`;

function Search() {
  return (
    <StyledSearch>
      <div>Button</div>

      <Form>
        <button>button1</button>
        <Input placeholder="What do you want to play?" />
        <button>button2</button>
      </Form>
    </StyledSearch>
  );
}

export default Search;
