import styled from 'styled-components';
import BookForm from './components/BookForm';

const Wrapper = styled.main`
  padding: 4.8rem 6.4rem;
`;

function App() {
  return (
    <Wrapper>
      <BookForm />
    </Wrapper>
  );
}

export default App;
