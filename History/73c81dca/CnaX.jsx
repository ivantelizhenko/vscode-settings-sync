import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
`;

export default NavLink;
