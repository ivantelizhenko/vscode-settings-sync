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
      <HelpLink href="#">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 12px 32px;

  font-size: 14px;
  color: ${COLORS.white};
  background-color: ${COLORS.gray[900]};
`;

const Message = styled.p`
  margin-right: auto;
`;

const HelpLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[300]};
  font-size: inherit;

  &:hover {
    color: inherit;
    text-decoration: revert;
  }
`;

export default SuperHeader;
