/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import VisualHidden from "../VisuallyHidden/VisuallyHidden";

const COLORS = {
  primary: "hsl(240deg 80% 60%)",
  gray50: "hsl(0deg 0% 95%)",
  gray300: "hsl(0deg 0% 75%)",
  gray500: "hsl(0deg 0% 50%)",
  gray700: "hsl(0deg 0% 40%)",
  black: "hsl(0deg 0% 0%)",
  transparentGray15: "hsl(0deg 0% 50% / 0.15)",
  transparentGray35: "hsl(0deg 0% 50% / 0.35)",
};

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + "px",
    "--padding": "0px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + "px",
    "--padding": "0px",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 24 + "px",
    "--padding": "4px",
  },
};

const StyledProgressBar = styled.progress`
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100%;

  &::-webkit-progress-value,
  &::-moz-progress-bar {
    // Internet Explorer doesn't support this style
    background-color: ${COLORS.primary};
    border-radius: calc(var(--borderRadius) / 2);
  }
`;

const ProgressBar = ({ value, size }) => {
  if (value > 100 || value < 0)
    throw new Error("Value should be from 1 to 100");

  const style = SIZES[size];

  return (
    <StyledProgressBar
      role="progressbar"
      aria-label="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={style}
      min={0}
      max={100}
      value={value}
    >
      <VisualHidden>{value}</VisualHidden>
    </StyledProgressBar>
  );
};

export default ProgressBar;
