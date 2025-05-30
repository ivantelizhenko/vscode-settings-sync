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
      <HeaderSpacer size={48} />
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
          <Button type="outline" style={{ "--width": "150px" }}>
            Увійти
          </Button>
          <Button type="fill">Зареєструватися</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

const HeaderSpacer = styled(Spacer)`
  background-color: var(--color-primary);

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Wrapper = styled.header`
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    padding: 32px 60px;
  }
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
