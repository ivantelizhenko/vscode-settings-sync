import styled from "styled-components";
import Logo from "./Logo";
import { QUERIES } from "../constants";

function Footer() {
  return (
    <Wrapper>
      <List>
        <li>
          <a href="#">Пошук тварин</a>
        </li>
        <li>
          <a href="#">Як допомогти</a>
        </li>
        <li>
          <a href="#">Новини</a>
        </li>
        <li>
          <a href="#">Блог</a>
        </li>
        <li>
          <a href="#">Pet stories</a>
        </li>
        <li>
          <a href="#">Мій акаунт</a>
        </li>
      </List>
      <IdentityWrapper>
        <Logo />
        <p style={{ color: "white" }}>© 2025 PawHome. All rights reserved.</p>
      </IdentityWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--color-primary);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  @media ${QUERIES.laptopAndUp} {
    padding: 24px 60px;
    display: grid;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  & li a {
    display: block;
    text-align: center;
    padding: 8px;
    color: white;

    @media ${QUERIES.laptopAndUp} {
      white-space: nowrap;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: revert;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const IdentityWrapper = styled.div``;

export default Footer;
