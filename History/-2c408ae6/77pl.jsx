import styled from "styled-components";
import Heading from "./Heading";

function MobileMenu() {
  return (
    <Wrapper>
      <Heading as="h2">PawHome</Heading>
      <UnstyledButton onClick={handleCloseMobileMenu}>
        <Icon id="menu" size={24} strokeWidth={2.5} />
      </UnstyledButton>
      <ul>
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
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: white;
  position: fixed;e
  top: 0;
  left: 0;
`;

export default MobileMenu;
