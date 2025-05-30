import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Logo />

        <Nav>
          <NavLink href="/sale" $isSelected={true}>
            Sale
          </NavLink>
          <NavLink href="/new" $isSelected={false}>
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" $isSelected={false}>
            Men
          </NavLink>
          <NavLink href="/women" $isSelected={false}>
            Women
          </NavLink>
          <NavLink href="/kids" $isSelected={false}>
            Kids
          </NavLink>
          <NavLink href="/collections" $isSelected={false}>
            Collections
          </NavLink>
        </Nav>

        <Size />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 24px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
`;

const NavLink = styled.a`
  color: ${(props) => (props.$isSelected ? COLORS.secondary : "inherit")};
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
`;

const Size = styled.div`
  flex: 1;
`;

export default Header;
