import styled from "styled-components";

import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import { useState } from "react";
import MobileMenu from "./Dialog";
import Logo from "./Logo";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => setShowMobileMenu(true);
  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  return (
    <Wrapper>
      <Logo />
      <UnstyledButton onClick={handleShowMobileMenu}>
        <Icon
          id="menu"
          size={24}
          strokeWidth={2.5}
          style={{ color: "white" }}
        />
      </UnstyledButton>
      {showMobileMenu && (
        <MobileMenu onCloseMobileMenu={handleCloseMobileMenu} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  margin-top: 48px;
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: relative;
`;

export default Header;
