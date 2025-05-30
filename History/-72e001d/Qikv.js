import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const StyledSelect = styled.select`
  color: inherit;
  border: none;
  font-size: 16px;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  appearance: none;
`;

export const SelectWrapper = styled.div`
  position: relative;
  /* width: var(--width); */
  width: fit-content;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const [width, setWidth] = useState(0);
  const select = useRef(null);
  useEffect(() => {
    console.log("i am changed");
    // if (select.current) {
    //   setWidth(select.current.offsetWidth);
    // }
  }, [displayedValue]);

  return (
    <SelectWrapper style={{ "--width": width + "px" }}>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Icon id="chevron-down" size={25} strokeWidth={2} ref={select} />
    </SelectWrapper>
  );
};

export default Select;
