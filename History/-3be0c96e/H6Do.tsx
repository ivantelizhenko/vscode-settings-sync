import styled from 'styled-components';
import { Outlet } from 'react-router';

import Loader from './Loader';
import Header from './Header';
import { useAppState } from '../contexts/appContext/AppContext';

const StyledAppLayout = styled.div`
  font-family: 'Rubik', serif;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  margin: 8rem 10rem;
  padding: 6rem 8rem;
  border: 1px #000 solid;
`;

function AppLayout() {
  const { isLoading } = useAppState();

  if (isLoading) return <Loader />;

  return (
    <ModalProvider>
      <FiltersProvider>
        <AppProvider>
          <StyledAppLayout>
            <Header />
            <StyledMain>
              <Outlet />
            </StyledMain>
          </StyledAppLayout>
        </AppProvider>
      </FiltersProvider>
    </ModalProvider>
  );
}

export default AppLayout;
