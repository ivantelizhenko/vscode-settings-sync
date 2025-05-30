import styled from 'styled-components';
import { Outlet } from 'react-router';

import Loader from './Loader';
import Header from './Header';
import { useAppState } from '../contexts/appContext/AppContext';
import { ModalProvider } from '../contexts/modalContext/ModalContext';
import { useEffect } from 'react';

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
  // const { isLoading } = useAppState();
  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);
  // if (isLoading) return <Loader />;

  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <ModalProvider>
          <Outlet />
        </ModalProvider>
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
