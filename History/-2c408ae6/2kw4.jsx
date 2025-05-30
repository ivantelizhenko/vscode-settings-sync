import styled from "styled-components";
import Heading from "./Heading";
import UnstyledButton from "./UnstyledButton";
import Icon from "./Icon";
import Spacer from "./Spacer";
import { QUERIES } from "../constants";
import Button from "./Button";

function MobileMenu({ onCloseMobileMenu, setPage }) {
  return (
    <dialog open>
      <Wrapper>
        <Header>
          <Heading as="h2">PawHome</Heading>
          <UnstyledButton onClick={onCloseMobileMenu}>
            <Icon id="close" size={24} strokeWidth={2.5} />
          </UnstyledButton>
        </Header>
        <Spacer size={64} />
        <List>
          <li
            onClick={() => {
              setPage("cardsList");
              onCloseMobileMenu();
            }}
          >
            <p>Пошук тварин</p>
          </li>
          <li>
            <p>Притулки</p>
          </li>
          <li>
            <p>Як допомогти</p>
          </li>
          <li>
            <p>Новини</p>
          </li>
          <li>
            <p>Блог</p>
          </li>
          <li>
            <p>Pet stories</p>
          </li>
          <li>
            <p>Мій акаунт</p>
          </li>
        </List>
        <Spacer size={64} />
        <Button type="fill">Задонатити</Button>
      </Wrapper>
    </dialog>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  padding: 48px 16px;

  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  & {
    @media ${QUERIES.laptopAndUp} {
      display: none;
    }
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & li p {
    padding: 8px;
    color: inherit;
    cursor: pointer;
  }
`;

export default MobileMenu;
