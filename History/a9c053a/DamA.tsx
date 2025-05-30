import { ReactNode } from "react";
import styled, { css } from "styled-components";

const COLORS = {
  primary: "hsl(240deg 100% 60%)",
  primaryLight: "hsl(235deg 100% 62%)",
  white: "hsl(0deg 0% 100%)",
  offwhite: "hsl(235deg 85% 97%)",
  gray: "hsl(240deg 10% 50%)",
  transparentGray15: "hsl(240deg 10% 50% / 0.15)",
  transparentGray75: "hsl(240deg 10% 50% / 0.75)",
  black: "hsl(0deg 0% 0%)",
};

type VariantTypes = "fill" | "outline" | "ghost";

type ButtonProps = {
  variant: VariantTypes;
  size: "large" | "medium" | "small";
  children: ReactNode;
};

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "8px 16px",
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "16px 24px",
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "20px 36px",
  },
};

const VARIANTS = {
  fill: {
    "--textColor": COLORS.white,
    "--textColorHover": COLORS.offwhite,
    "--backgroundColor": COLORS.primary,
    "--backgroundColorHover": COLORS.primaryLight,
    "--borderColor": COLORS.primary,
    "--outlineColor": COLORS.primary,
  },
  outline: {
    "--textColor": COLORS.primary,
    "--textColorHover": COLORS.primaryLight,
    "--backgroundColor": COLORS.white,
    "--backgroundColorHover": COLORS.offwhite,
    "--borderColor": COLORS.primary,
    "--outlineColor": COLORS.primary,
  },
  ghost: {
    "--textColor": COLORS.transparentGray75,
    "--textColorHover": COLORS.black,
    "--backgroundColor": "transparent",
    "--backgroundColorHover": COLORS.transparentGray15,
    "--borderColor": "none",
    "--outlineColor": COLORS.transparentGray75,
  },
};

function Button({ variant, size, children }: ButtonProps) {
  const sizeObj = SIZES[size];
  const variantObj = VARIANTS[variant];

  return (
    <ButtonStyled style={{ ...sizeObj, ...variantObj }}>
      {children}
    </ButtonStyled>
  );
}

export default Button;

const ButtonStyled = styled.button`
  font-family: Roboto;
  font-weight: 500;

  line-height: 100%;
  letter-spacing: -2%;
  text-transform: uppercase;

  outline-offset: 2px;
  outline: 2px solid transparent;
  border: 2px solid transparent;

  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);

  color: var(--textColor);
  background-color: var(--backgroundColor);
  border-color: ${COLORS.primary};

  &:focus {
    outline-color: var(--outlineColor);
  }

  &:hover {
    color: var(--textColorHover);
    background-color: var(--backgroundColorHover);
  }
`;
