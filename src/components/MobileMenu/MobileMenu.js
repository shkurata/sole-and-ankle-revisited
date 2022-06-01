/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile menu">
        <ButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </UnstyledButton>
        </ButtonWrapper>
        <NavigationLinks>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </NavigationLinks>
        <NavigationFooter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </NavigationFooter>
      </Content>
    </Overlay>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
`;

const NavigationLinks = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: var(--font-medium);
  color: var(--color-gray-900);
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FooterLink = styled(Link)`
  line-height: 1;
  text-transform: none;
  font-size: 0.875rem;
  color: var(--color-gray-700);
  font-weight: var(--font-normal);
`;

const NavigationFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  flex: 1;
`;

const Overlay = styled(DialogOverlay)`
  background: var(--color-backdrop);
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Content = styled(DialogContent)`
  background: white;
  display: flex;
  flex-direction: column;
  hight: 100%;
  justify-content: space-between;
  padding-right: 22px;
  padding: 32px;
  width: 300px;
`;

export default MobileMenu;
