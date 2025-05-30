import React, { useEffect } from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS, QUERIES } from "../../constants";
import { CrumbLink } from "../Breadcrumbs/Breadcrumbs";
import * as Dialog from "@radix-ui/react-dialog";

const MobileMenu = ({ isOpen, onDismiss }) => {
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <Dialog.Root isOpen={isOpen} onDismiss={onDismiss}>
      <Overlay />
      <Dialog.Portal>
        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" size={24} strokeWidth={2} />
          </CloseButton>
          <VisuallyHidden>
            <Dialog.Title>Menu navigation</Dialog.Title>
          </VisuallyHidden>
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
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
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

const Content = styled(Dialog.Content)`
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

const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto 0;
  justify-self: center;
`;

const MenuNavLink = styled.a`
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
