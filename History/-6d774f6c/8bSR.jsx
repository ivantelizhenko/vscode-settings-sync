import styled from "styled-components";
import Logo from "./Logo";

function Footer() {
  return (
    <Wrapper>
      <List>
        <li>
          <a href="#"></a>
        </li>
      </List>
      <Logo />
      <p>© 2025 PawHome. All rights reserved.</p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--color-primary);
  padding: 24px 16px;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default Footer;
