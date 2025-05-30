import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";

const SearchInput = ({ label, ...delegated }) => {
  return (
    <Label>
      <VisuallyHidden>Search</VisuallyHidden>
      <Input {...delegated} placeholder="Search…" />
      <SearchIcon id="search" strokeWidth={1} size={16} />
    </Label>
  );
};

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.white};
  background-color: transparent;
  padding: 6px 24px;
  font-size: inherit;
  color: ${COLORS.gray[100]};
  outline-offset: 4px;

  ::-moz-focus-inner {
    border: 0;
  }

  &::placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const SearchIcon = styled(Icon)`
  height: fit-content;
  color: ${COLORS.gray[300]};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  outline: none;

  &:focus {
    outline: 2px;
  }
`;

export default SearchInput;
