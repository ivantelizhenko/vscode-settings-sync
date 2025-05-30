import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return <Wrapper>message</Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${COLORS.gray[900]};
  padding: 12px 32px;
`;

export default SuperHeader;
