import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media (max-width: ${(props) => props.theme.laptop}) {
    display: none;
  }
`;

export default Nav;
