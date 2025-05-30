import styled from 'styled-components';
import BookForm from './BookForm';

const StyledMain = styled.main`
  background-color: yellow;
  height: 100%;
`;

function Main() {
  return (
    <StyledMain>
      <BookForm />
    </StyledMain>
  );
}

export default Main;
