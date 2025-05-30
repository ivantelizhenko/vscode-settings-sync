import styled from "styled-components";

import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import Spacer from "./Spacer";
import DesktopMenu from "./DesktopMenu";
import { QUERIES } from "../constants";
import Button from "./Button";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => setShowMobileMenu(true);
  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  return (
    <>
      <Spacer size={48} style={{ backgroundColor: "var(--color-primary)" }} />
      <Wrapper>
        <Logo />
        <DesktopMenu />
        <MobileMenuButton onClick={handleShowMobileMenu}>
          <Icon
            id="menu"
            size={24}
            strokeWidth={2.5}
            style={{ color: "white" }}
          />
        </MobileMenuButton>
        {showMobileMenu && (
          <MobileMenu onCloseMobileMenu={handleCloseMobileMenu} />
        )}

        <ButtonWrapper>
          <Button type="outline">Увійти</Button>
          <Button type="fill">Зареєструватися</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: relative;
`;

const MobileMenuButton = styled(UnstyledButton)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 24px;
  }
`;

export default Header;
