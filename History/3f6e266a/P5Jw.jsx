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
      <HelpLink href="#">Hey</HelpLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: baseline;
  background-color: ${COLORS.gray[900]};
  padding: 12px 32px;
  font-size: 14px;
`;

const Message = styled.p`
  align-self: center;
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[300]};
  font-size: inherit;
`;

export default SuperHeader;
