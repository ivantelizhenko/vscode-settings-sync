import styled from 'styled-components';
import BookForm from './BookForm/BookForm';

import Dashboard from './Dashboard/Dashboard';
import { usePage } from '../store/PageContext/PageContext';

const StyledMain = styled.main`
  background-color: #d4a373;
  padding: 4.8rem 6.4rem;
  height: 100%;
`;

function Main() {
  const { page } = usePage();
  return (
    <StyledMain>
      {page === 'form' && <BookForm />}
      {page === 'dashboard' && <Dashboard />}
    </StyledMain>
  );
}

export default Main;
