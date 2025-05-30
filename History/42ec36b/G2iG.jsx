import styled from 'styled-components';
import Logout from '../features/authentication/Logout';

const StyledHeaderMenu = styled.ol`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
