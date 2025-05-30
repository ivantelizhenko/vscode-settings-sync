import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: { "--lineWidth": 1, "--fontSize": 14 + "px" },
  large: { "--lineWidth": 2, "--fontSize": 18 + "px" },
};

const WrapperInput = styled.div`
  font-weight: 700;
  font-size: var(--fontSize);
  border-bottom: var(--lineWidth + "px") solid;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: var(--width);
  border: none;
  outline: none;
  padding: 4px 0;
  padding-left: 24px;
  font: inherit;
  color: inherit;

  &:focus-visible {
    outline: 1px auto -webkit-focus-ring-color;
    outline: 1px auto Highlight;
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const stylesSize = SIZES[size];

  if (!stylesSize) throw new Error("Unknown size passed to IconInput");
  const styles = { ...stylesSize, "--width": width };

  return (
    <WrapperInput style={styles}>
      <Icon
        id={icon}
        size={stylesSize["--fontSize"]}
        strokeWidth={stylesSize["--lineWidth"]}
      />
      <Input placeholder={placeholder} />
    </WrapperInput>
  );
};

export default IconInput;
