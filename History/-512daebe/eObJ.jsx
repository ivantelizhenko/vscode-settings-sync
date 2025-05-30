import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS, QUERIES } from "../../constants";
import Nav from "../Header/Nav";
import NavLink from "../Header/NavLink";
import { CrumbLink } from "../Breadcrumbs/Breadcrumbs";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={24} strokeWidth={2} />
        </CloseButton>
        <MenuNav>
          <MenuNavLink href="/sale">Sale</MenuNavLink>
          <MenuNavLink href="/new">New&nbsp;Releases</MenuNavLink>
          <MenuNavLink href="/men">Men</MenuNavLink>
          <MenuNavLink href="/women">Women</MenuNavLink>
          <MenuNavLink href="/kids">Kids</MenuNavLink>
          <MenuNavLink href="/collections">Collections</MenuNavLink>
        </MenuNav>
        <Footer>
          <CrumbLink href="/terms">Terms and Conditions</CrumbLink>
          <CrumbLink href="/privacy">Privacy Policy</CrumbLink>
          <CrumbLink href="/contact">Contact Us</CrumbLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled.div`
  display: none;

  @media ${QUERIES.laptopAndSmaller} {
    display: block;
    width: 100%;
    position: fixed;
    height: 100vh;
    height: 100dvh;
    background-color: hsla(220, 5%, 40%, 0.8);
    z-index: 999;
    overflow: clip;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 32px 32px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${COLORS.white};
  height: 100%;
  max-width: 300px;
  width: 100%;
`;

const MenuNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto 0;
  justify-self: center;
`;
const MenuNavLink = styled(NavLink)`
  display: block;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: ${14 / 16 + "rem"};
`;

const CloseButton = styled(UnstyledButton)`
  align-self: end;
`;

export default MobileMenu;
