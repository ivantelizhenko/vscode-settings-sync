import styled from 'styled-components';
import BookForm from './components/BookForm';

const Wrapper = styled.main`
  padding: 12.8rem;
  background-color: pink;
  min-height: 100%;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <BookForm />
    </Wrapper>
  );
}

export default App;
