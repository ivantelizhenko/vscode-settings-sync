import styled from "styled-components";

function Logo() {
  return <StyledLogo>PawHome</StyledLogo>;
}

const StyledLogo = styled.h1`
  font-size: 2rem;
  font-weight: ${WEIGHTS.semiBold};
`;

export default Logo;
