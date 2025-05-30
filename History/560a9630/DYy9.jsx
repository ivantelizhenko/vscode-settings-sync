import styled from "styled-components";
import { QUERIES } from "../../constants";

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.laptopAndSmaller} {
    display: none;
  }
`;

export default Nav;
