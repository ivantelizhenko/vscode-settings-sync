import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <ButtonWrapper>
          <Button>Subscribe</Button>
          <Link href="#">Already is subscriber?</Link>
        </ButtonWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  ${MainHeader} & {
    display: none;
    @media ${QUERIES.laptopAndUp} {
      display: flex;
    }
  }
`;

const LogoWrapper = styled.div`
  grid-column: 2;
`;

const ButtonWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-content: end;
    position: relative;
  }
`;

const Link = styled.a`
  position: absolute;
  bottom: -24px;
  right: 16px;
  color: var(--color-gray-900);
  font-size: 0.875rem;
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
