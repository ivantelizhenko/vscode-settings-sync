import styled from 'styled-components';
import { Outlet } from 'react-router';

import { useAppState } from '../contexts/userContext/AppContext';
import Header from '../components/headings/Header';
import Loader from '../components/helpers/Loader';

const StyledAppLayout = styled.div`
  font-family: 'Rubik', serif;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  background-color: red;
  height: 100vh;
`;

const paddingV = '6rem';
const paddingH = '8rem';

const StyledMain = styled.main`
  margin: 8rem 10rem;
  padding: ${`${paddingV} ${paddingH}`};
  border: 1px #000 solid;
  /* max-height: calc(100vh - paddingV); */
  flex: 1;
  height: fit-content;
`;

function AppLayout() {
  const { isLoading } = useAppState();

  if (isLoading) return <Loader />;

  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
