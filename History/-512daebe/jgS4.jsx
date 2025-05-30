import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS } from "../../constants";
import Nav from "../Header/Nav";
import NavLink from "../Header/NavLink";
import * as Dialog from "@radix-ui/react-dialog";

const MobileMenu = () => {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CloseButton>
            <Dialog.Close>
              <Icon id="close" size={24} strokeWidth={2} />
            </Dialog.Close>
          </CloseButton>
          <MenuNav>
            <MenuNavLink href="/sale">
              Sale
              <VisuallyHidden>
                <Dialog.Title>Sale</Dialog.Title>
              </VisuallyHidden>
            </MenuNavLink>
            <MenuNavLink href="/new">
              New&nbsp;Releases
              <VisuallyHidden>
                <Dialog.Title> New&nbsp;Releases</Dialog.Title>
              </VisuallyHidden>
            </MenuNavLink>
            <MenuNavLink href="/men">
              Men
              <VisuallyHidden>
                <Dialog.Title>Sale</Dialog.Title>
              </VisuallyHidden>
            </MenuNavLink>
            <MenuNavLink href="/women">
              Women
              <VisuallyHidden>
                <Dialog.Title>Women</Dialog.Title>
              </VisuallyHidden>
            </MenuNavLink>
            <MenuNavLink href="/kids">
              Kids
              <VisuallyHidden>
                <Dialog.Title>Kids</Dialog.Title>
              </VisuallyHidden>
            </MenuNavLink>
            <MenuNavLink href="/collections">
              Collections
              <VisuallyHidden>
                <Dialog.Title>Collections</Dialog.Title>
              </VisuallyHidden>
            </MenuNavLink>
          </MenuNav>
          <Footer>
            <FooterLink href="/#">
              Term and Conditions
              <VisuallyHidden>
                <Dialog.Title>Term and Conditions</Dialog.Title>
              </VisuallyHidden>
            </FooterLink>
            <FooterLink href="/privacy">
              Privacy Policy
              <VisuallyHidden>
                <Dialog.Title>Privacy Policy</Dialog.Title>
              </VisuallyHidden>
            </FooterLink>
            <FooterLink href="/contact">
              Contact Us
              <VisuallyHidden>
                <Dialog.Title>Contact Us</Dialog.Title>
              </VisuallyHidden>
            </FooterLink>
          </Footer>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
};

const Overlay = styled(Dialog.Overlay)`
  display: none;

  @media (max-width: ${(props) => props.theme.laptop}) {
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
`;

const FooterLink = styled.a`
  font-size: ${14 / 16 + "rem"};
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:hover {
    color: ${COLORS.gray[900]};
  }
`;

const CloseButton = styled(Dialog.Close)`
  align-self: end;
`;

export default MobileMenu;
