import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <Message>Free shipping on domestic orders over $75!</Message>
      <SearchInput />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.gray[900]};
  padding: 12px 32px;
`;

const Message = styled.p`
  color: ${COLORS.white};
`;

export default SuperHeader;
