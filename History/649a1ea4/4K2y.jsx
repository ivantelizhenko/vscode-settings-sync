import styled from "styled-components";
import { WEIGHTS } from "../constants";

function Logo() {
  return <StyledLogo>PawHome</StyledLogo>;
}

const StyledLogo = styled.h1`
  font-size: 2rem;
  font-weight: ${WEIGHTS.semiBold};
  color: white;
`;

export default Logo;
