import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getIDsFromLocalStorage } from '../features/utils/helpers';
import { useAppDispatch } from '../store/store';
import { addIDs } from '../features/store/statusSlice';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    const localStorageIDs = getIDsFromLocalStorage();

    if (localStorageIDs?.gameId && localStorageIDs?.userId) {
      dispatch(
        addIDs({
          gameId: localStorageIDs.gameId,
          userId: localStorageIDs?.userId,
        })
      );
      navigate(`/chess/${localStorageIDs.gameId}`);
    } else if (id) {
      console.log('i have id');
      navigate(`/chess/${id}`);
    } else {
      console.log('menu?');
      navigate('/menu');
    }
  }, [dispatch, navigate, id]);

  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  max-height: 100%;
  background-color: var(--color-gray-700);
`;

export default App;
