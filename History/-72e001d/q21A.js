import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue, getTextWidth } from "./Select.helpers";

const StyledSelect = styled.select`
  color: inherit;
  border: none;
  font-size: inherit;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  appearance: none;
  width: fit-content;
`;

export const SelectWrapper = styled.div`
  position: relative;
  font-size: var(--fontSize);
  width: var(--width);
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const fontSize = 16;
  const displayedValue = getDisplayedValue(value, children);
  const width = getTextWidth(displayedValue, fontSize);
  console.log(width);
  return (
    <SelectWrapper
      style={{ "--width": width + "px", "--fontSize": fontSize + "px" }}
    >
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Icon id="chevron-down" size={25} strokeWidth={2} />
    </SelectWrapper>
  );
};

export default Select;
