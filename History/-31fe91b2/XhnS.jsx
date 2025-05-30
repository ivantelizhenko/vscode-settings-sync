import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
`;

const Main = styled.main`
  background-color: green;
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />

      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
