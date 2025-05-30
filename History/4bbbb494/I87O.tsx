import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function AppEnviroment() {
  const navigate = useNavigate();

  navigate('/menu');

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

export default AppEnviroment;
