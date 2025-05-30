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
        <Spacer>
          <Logo />
        </Spacer>
        <Nav>
          <NavLink href="/sale" isSelected={true}>
            Sale
          </NavLink>
          <NavLink href="/new" isSelected={false}>
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" isSelected={false}>
            Men
          </NavLink>
          <NavLink href="/women" isSelected={false}>
            Women
          </NavLink>
          <NavLink href="/kids" isSelected={false}>
            Kids
          </NavLink>
          <NavLink href="/collections" isSelected={false}>
            Collections
          </NavLink>
        </Nav>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding: 24px 32px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => (props.isSelected ? COLORS.secondary : "inherit")};
`;

export default Header;
