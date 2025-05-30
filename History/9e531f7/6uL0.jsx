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

const Input = styled.input`
  padding-right: 6.4rem;
  background: var(--background-elevated-base);
  border-radius: 500px;
  box-shadow: none;
  cursor: pointer;
`;

function Search() {
  return (
    <StyledSearch>
      <div>Button</div>

      <Form>
        <button>button1</button>
        <Input placeholder="What do you want to play&" />
        <button>button2</button>
      </Form>
    </StyledSearch>
  );
}

export default Search;
