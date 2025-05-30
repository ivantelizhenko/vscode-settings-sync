import styled from 'styled-components';
import BookForm from './components/BookForm';
import Footer from './components/Footer';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
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
