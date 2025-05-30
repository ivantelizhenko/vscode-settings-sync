import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";
import { MainHeader } from "../Header/Header";

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  ${MainHeader} & {
    position: absolute;
    left: 0;
    top: 0;
    margin: auto 0;
  }

  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
