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
  padding-left: 3.6rem;
  padding-right: 6.4rem;
  color: var(--text-base);
  background: var(--background-elevated-base);
  border-radius: 500px;
  box-shadow: none;
  cursor: pointer;
  border: none;

  inline-size: 100%;

  &:focus {
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
