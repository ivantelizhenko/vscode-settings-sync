import styled from 'styled-components';

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
`;

const Button = styled.button`
  display: flex;
  height: 4rem;
  justify-content: flex-start;
  padding: 0.4rem 0.8rem;
  cursor: pointer;

  font-weight: 700;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;

  color: var(--text-subdued);
  background-color: transparent;
  border: 0;
  border-radius: 9999px;

  // ???
  flex-shrink: 0;
`;

function Navigation() {
  return (
    <StyledNavigation>
      <Header>
        <Button>
          <span>icon</span> Моя бібліотека
        </Button>
        <Button>
          <span>icon</span>
        </Button>
      </Header>
      <div>Section</div>
      <div>Section</div>
      <div>div</div>
      <div>div</div>
    </StyledNavigation>
  );
}

export default Navigation;
