import styled from "styled-components";
import Heading from "./Heading";
import UnstyledButton from "./UnstyledButton";
import Icon from "./Icon";
import Spacer from "./Spacer";

function MobileMenu({ onCloseMobileMenu }) {
  return (
    <Wrapper>
      <Header>
        <Heading as="h2">PawHome</Heading>
        <UnstyledButton onClick={onCloseMobileMenu}>
          <Icon id="close" size={24} strokeWidth={2.5} />
        </UnstyledButton>
      </Header>
      <Spacer size={64} />
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
  width: 100%;
  height: 100%;
  padding: 48px 16px;

  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & li a {
    padding: 8px;
  }
`;

export default MobileMenu;
