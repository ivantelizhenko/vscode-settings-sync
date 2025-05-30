import styled, { css } from "styled-components";
import { WEIGHTS } from "../constants";

const Button = styled.button`
  ${(props) =>
    props.type === "fill" &&
    css`
      background-color: #e27c1e;
      font-weight: ${WEIGHTS.semiBold};
      border: none;
      color: #fff;
    `}
  ${(props) =>
    props.type === "outline" &&
    css`
      background-color: transparent;
      border: 1px solid #1e1e1e;
      font-weight: ${WEIGHTS.normal};
      color: #1e1e1e;
    `}


  width: var(--width, 100%);
  text-align: center;
  border-radius: 24px;
  padding: 12px;
`;

export default Button;
