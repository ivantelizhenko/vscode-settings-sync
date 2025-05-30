import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a``;

const Wrapper = styled.h1``;

export default Logo;
