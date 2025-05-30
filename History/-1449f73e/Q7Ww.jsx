import React from "react";
import styled from "styled-components";

import { COLORS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import MobileMenu from "../MobileMenu";
import Nav from "./Nav";
import NavLink from "./NavLink";
import * as Dialog from "@radix-ui/react-dialog";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <Dialog.Root>
        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
        <SuperHeader />
        <MainHeader>
          <Side>
            <Logo />
          </Side>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Side />

          <MenuNav>
            <UnstyledButton>
              <Icon id="shopping-bag" size={24} strokeWidth={2} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" size={24} strokeWidth={2} />
            </UnstyledButton>
            <Dialog.Trigger asChild>
              <UnstyledButton>
                <Icon id="menu" size={24} strokeWidth={2} />
              </UnstyledButton>
            </Dialog.Trigger>
          </MenuNav>
        </MainHeader>
      </Dialog.Root>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.phoneAndSmaller} {
    padding: 18px 16px;
  }
`;

const MenuNav = styled.nav`
  display: none;

  @media ${QUERIES.laptopAndSmaller} {
    display: flex;
    gap: 32px;
    margin-left: 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

export default Header;
