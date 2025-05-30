import styled from "styled-components";
import Logo from "./Logo";

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
      <Logo />
      <p style={{ color: "white" }}>© 2025 PawHome. All rights reserved.</p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--color-primary);
  padding: 24px 16px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & li a {
    padding: 8px;
    color: white;
  }
`;

export default Footer;
