import styled from "styled-components";
import { QUERIES } from "../constants";

function DesktopMenu({ setPage }) {
  return (
    <Wrapper>
      <List>
        <li onClick={() => setPage("cardsList")}>
          <p>Пошук тварин</p>
        </li>
        <li>
          <p href="#">Як допомогти</p>
        </li>
        <li>
          <p href="#">Новини</p>
        </li>
        <li>
          <p href="#">Блог</p>
        </li>
        <li>
          <p href="#">Pet stories</p>
        </li>
        <li>
          <p href="#">Мій акаунт</p>
        </li>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
  padding: 8px 0;
`;

const List = styled.ul`
  display: flex;
  gap: 8px;

  & li p {
    padding: 8px;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default DesktopMenu;
