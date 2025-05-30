import styled, { css } from "styled-components";
import { WEIGHTS } from "../constants";

const Button = styled.button`
  ${(props) =>
    props.type === "fill" &&
    css`
      background-color: #e27c1e;
      font-weight: ${WEIGHTS.semiBold};
      border: none;
    `}
  ${(props) =>
    props.type === "outline" &&
    css`
      background-color: transparent;
      border: 1px solid #fff;
      font-weight: ${WEIGHTS.normal};
    `}

  color: #fff;
  width: var(--width);
  text-align: center;
  border-radius: 24px;
  padding: 12px;
`;

export default Button;
