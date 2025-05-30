import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import * as Dialog from "@radix-ui/react-dialog";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onDismiss={onDismiss}>
      <Dialog.Portal>
        <Overlay onClick={onDismiss} />
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
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    height: 100dvh;
    background-color: hsla(220, 5%, 40%, 0.8);
  }
`;

const Content = styled(Dialog.Content)`
  display: none;
  @media ${QUERIES.tabletAndSmaller} {
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
  }
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
  text-decoration: none;
  font-size: ${18 / 16 + "rem"};
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: ${14 / 16 + "rem"};
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-weight: ${WEIGHTS.normal};
  font-size: ${14 / 16 + "rem"};
  color: ${COLORS.gray[700]};
`;

const CloseButton = styled(UnstyledButton)`
  align-self: end;
`;

export default MobileMenu;
