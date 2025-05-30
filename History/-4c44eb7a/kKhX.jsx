import styled from "styled-components";
import { WEIGHTS } from "../constants";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";

function Header() {
  return (
    <Wrapper>
      <Logo>PawHome</Logo>
      <UnstyledButton>
        <Icon id="menu" size={24} strokeWidth={2.5} />
      </UnstyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  margin-top: 48px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: ${WEIGHTS.semiBold};
`;

export default Header;
