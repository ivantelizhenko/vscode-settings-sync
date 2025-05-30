import GlobalStyles from './styles/GlobaslStyles';
import styled from 'styled-components';
import Table from './features/users/UserTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  selectError,
  selectLoading,
  selectUsers,
} from './features/users/userSlice';
import store, { AppDispatch, useAppDispatch, useAppSelector } from './store';
import { useEffect } from 'react';

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: #f9fafb;
  height: 100vh;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
`;

function App() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(state => state.user);

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchUsers());
    }
  }, [dispatch, isLoading]);

  return (
    <>
      <GlobalStyles />
      <Main>
        <Container>
          <Table />
        </Container>
      </Main>
    </>
  );
}

export default App;
