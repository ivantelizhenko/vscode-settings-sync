import styled from "styled-components";
import Button from "./Button";
import { HiPlus, HiBookOpen, HiOutlineGlobeAlt } from "react-icons/hi2";
import Sections from "./Sections";
import NavLinkList from "./NavLinkList";
import ButtonLanguage from "./ButtonLanguage";

const StyledLeftSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: calc(var(--left-sidebar-width) * 1px);
  background-color: var(--background-base);
`;

const Heading = styled.header`
  display: flex;
  gap: 0.8rem;
  padding: 1.2rem 1.6rem 0.8rem;
  margin-bottom: 0.8rem;
  justify-content: space-between;
`;

const ContainerButtonLanguage = styled.div`
  margin-bottom: 3.2rem;
  padding: 0 2.4rem;
`;

function LeftSideBar() {
  return (
    <StyledLeftSideBar>
      <Heading>
        <Button icon={<HiBookOpen />}>Your library</Button>
        <Button icon={<HiPlus />}></Button>
      </Heading>
      <Sections />
      <NavLinkList />

      <ContainerButtonLanguage>
        <ButtonLanguage icon={<HiOutlineGlobeAlt />} language="English" />
      </ContainerButtonLanguage>
    </StyledLeftSideBar>
  );
}

export default LeftSideBar;
