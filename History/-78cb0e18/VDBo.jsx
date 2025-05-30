import styled from 'styled-components';
import Button from './Button';
import { HiMiniPlus, HiOutlineBookOpen } from 'react-icons/hi2';

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;

  width: calc(var(--left-sidebar-width) * 1px);
  background-color: var(--color-black);
`;

const Header = styled.header`
  display: flex;
  gap: 0.8rem;
  padding: 1.2rem 1.6rem 0.8rem;
  margin-bottom: 0.8rem;
  justify-content: space-between;
`;

function Navigation() {
  return (
    <StyledNavigation>
      <Header>
        <Button icon={<HiOutlineBookOpen />}>Моя бібліотека</Button>
        <Button icon={<HiMiniPlus />}></Button>
      </Header>
      <div>Section</div>
      <div>Section</div>
      <div>div</div>
      <div>div</div>
    </StyledNavigation>
  );
}

export default Navigation;
