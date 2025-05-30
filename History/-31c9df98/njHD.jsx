import React from "react";
import styled, { keyframes } from "styled-components";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <span>Sale</span>
            <span>Sale</span>
          </NavLink>
          <NavLink href="/new">
            <span>New&nbsp;Releases</span>
            <span>New&nbsp;Releases</span>
          </NavLink>
          <NavLink href="/men">
            <span>Men</span>
            <span>Men</span>
          </NavLink>
          <NavLink href="/women">
            <span>Women</span>
            <span>Women</span>
          </NavLink>
          <NavLink href="/kids">
            <span>Kids</span>
            <span>Kids</span>
          </NavLink>
          <NavLink href="/collections">
            <span>Collections</span>
            <span>Collections</span>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  perspective: 500px;
  transform-style: preserve-3d;
  position: relative;
  /* transform: perspective(500px) rotateY(-60deg); */
  span {
    display: inline-block;
    transition-property: transform, background-color;
    transition-duration: 0.3s;
    padding: 6px 12px;

    &:first-of-type {
      transform-origin: 50% 100%;
      background-color: var(--color-gray-100);
    }
    &:last-of-type {
      transform-origin: 50% 0%;
      background-color: var(--color-gray-500);
      transform: translateY(100%) rotateX(-90deg);
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &:hover span {
    &:first-of-type {
      transform: translateY(-100%) rotateX(90deg);
    }
    &:last-of-type {
      background-color: var(--color-gray-100);
      transform: rotateX(0deg);
    }
  }
`;

export default Header;
