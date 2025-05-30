import styled from "styled-components";
import Button from "./Button";
import { HiPlus, HiBookOpen } from "react-icons/hi2";
import Sections from "./Sections";
import NavLinkList from "./NavLinkList";

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
        <Button icon={<HiBookOpen />}>Your library</Button>
        <Button icon={<HiPlus />}></Button>
      </Header>
      <Sections />
      <NavLinkList />
      ButtonLanguage
    </StyledNavigation>
  );
}

export default Navigation;
