import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: { "--lineWidth": 1 + "px", "--fontSize": 14 + "px" },
  large: { "--lineWidth": 2 + "px", "--fontSize": 18 + "px" },
};

const Input = styled.input`
  width: var(--width);
  border: none;
  outline: none;
  padding: 4px 0;
  padding-left: 32px;
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

const Label = styled.label``;

export const WrapperInput = styled.div`
  position: relative;
  font-weight: 700;
  font-size: var(--fontSize);
  border-bottom: var(--lineWidth) solid;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const stylesSize = SIZES[size];

  if (!stylesSize) throw new Error("Unknown size passed to IconInput");
  const styles = { ...stylesSize, "--width": width };

  return (
    <WrapperInput style={styles}>
      <Label htmlFor="iconInput">
        <Icon
          id={icon}
          size={stylesSize["--fontSize"]}
          strokeWidth={stylesSize["--lineWidth"].replace("px", "")}
        />
        <VisuallyHidden>{label}</VisuallyHidden>
      </Label>
      <Input
        placeholder={placeholder}
        id="iconInput"
        type={icon === "at-sign" ? "email" : "text"}
      />
    </WrapperInput>
  );
};

export default IconInput;
