import styled from "styled-components";
import { WEIGHTS } from "../constants";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import { useState } from "react";
import MobileMenu from "./Dialog";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const handleShowMobileMenu = () => setShowMobileMenu(true);
  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  return (
    <Wrapper>
      <Logo>PawHome</Logo>
      <UnstyledButton onClick={handleShowMobileMenu}>
        <Icon id="menu" size={24} strokeWidth={2.5} />
      </UnstyledButton>
      {showMobileMenu && (
        <MobileMenu onCloseMobileMenu={handleCloseMobileMenu} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: relative;
  margin-bottom: -24px;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: ${WEIGHTS.semiBold};
`;

export default Header;
