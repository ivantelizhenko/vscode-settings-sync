/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

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
    "--borderRadiusSmall": 2 + "px",
    "--height": 8 + "px",
    "--padding": "0px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--borderRadiusSmall": 2 + "px",
    "--height": 12 + "px",
    "--padding": "0px",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--borderRadiusSmall": 4 + "px",
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
    border-top-left-radius: var(--borderRadiusSmall);
    border-bottom-left-radius: var(--borderRadiusSmall);
    ${(props) => {
      if (props.value === 99.8)
        return css`
          border-top-right-radius: calc(var(--borderRadiusSmall) / 2);
          border-bottom-right-radius: calc(var(--borderRadiusSmall) / 2);
        `;

      if (props.value > 99.8)
        return css`
          border-top-right-radius: var(--borderRadiusSmall);
          border-bottom-right-radius: var(--borderRadiusSmall);
        `;
    }}
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
    />
  );
};

export default ProgressBar;
