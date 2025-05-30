import styled from 'styled-components';
import BookForm from './components/BookForm';

const Wrapper = styled.main`
  padding: 12.8rem;
  background-color: pink;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <BookForm />
      <Footer />
    </Wrapper>
  );
}

export default App;
