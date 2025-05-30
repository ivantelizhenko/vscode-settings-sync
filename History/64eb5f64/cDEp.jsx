import styled from "styled-components";

function DesktopMenu() {
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
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: none;
`;

const List = styled.ul`
  display: flex;
  gap: 8px;

  & li a {
    padding: 8px;
    color: white;
  }
`;

export default DesktopMenu;
