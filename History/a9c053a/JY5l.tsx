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

type ButtonProps = {
  variant: "fill" | "outline" | "ghost";
  size: "large" | "medium" | "small";
  children: ReactNode;
};

type ButtonStyleProps = {
  $variant: "fill" | "outline" | "ghost";
  $size: "large" | "medium" | "small";
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

function Button({ variant, size, children }: ButtonProps) {
  return (
    <ButtonStyled $variant={variant} $size={size}>
      {children}
    </ButtonStyled>
  );
}

export default Button;

const ButtonStyled = styled.button<ButtonStyleProps>`
  font-family: Roboto;
  font-weight: 500;

  line-height: 100%;
  letter-spacing: -2%;
  text-transform: uppercase;

  outline-offset: 2px;
  outline: 2px solid transparent;
  border: 2px solid transparent;

  ${(props) =>
    props.$size === "large" &&
    css`
      font-size: 21px;
      padding: 20px 36px;
      border-radius: 4px;
    `}
  ${(props) =>
    props.$size === "medium" &&
    css`
      font-size: 18px;
      padding: 16px 24px;
      border-radius: 2px;
    `}
  ${(props) =>
    props.$size === "small" &&
    css`
      font-size: 16px;
      padding: 8px 16px;
      border-radius: 2px;
    `}

  ${(props) =>
    props.$variant === "fill" &&
    css`
      color: ${COLORS.white};
      background-color: ${COLORS.primary};
      border: 2px solid ${COLORS.primary};

      &:focus {
        outline-color: ${COLORS.primary};
      }

      &:hover {
        color: ${COLORS.offwhite};
        background-color: ${COLORS.primaryLight};
      }
    `}
  ${(props) =>
    props.$variant === "outline" &&
    css`
      background-color: ${COLORS.white};
      color: ${COLORS.primary};
      border-color: ${COLORS.primary};

      &:focus {
        outline-color: ${COLORS.primary};
      }

      &:hover {
        color: ${COLORS.primaryLight};
        background-color: ${COLORS.offwhite};
      }
    `};
  ${(props) =>
    props.$variant === "ghost" &&
    css`
      background-color: transparent;
      color: ${COLORS.transparentGray75};
      border-color: none;

      &:focus {
        outline-color: ${COLORS.transparentGray75};
      }

      &:hover {
        color: ${COLORS.black};
        background-color: ${COLORS.transparentGray15};
      }
    `};
`;
