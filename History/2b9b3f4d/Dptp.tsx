import styled from 'styled-components';
import BookForm from './BookForm/BookForm';
import { BooksProvider, useBooks } from '../store/BookContext';
import { useEffect } from 'react';

const StyledMain = styled.main`
  background-color: #d4a373;
  padding: 4.8rem 6.4rem;
  height: 100%;
`;

function Main() {
  const x = useBooks();
  useEffect(() => {
    console.log(x);
  }, [x]);

  return (
    <BooksProvider>
      <StyledMain>
        <BookForm />
      </StyledMain>
    </BooksProvider>
  );
}

export default Main;
