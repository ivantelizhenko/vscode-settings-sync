import styled from "styled-components";

function MobileMenu() {
  return (
    <Wrapper>
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
