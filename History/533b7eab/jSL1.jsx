import styled, { css } from "styled-components";
import { WEIGHTS } from "../constants";

const Button = styled.button`
  ${(props) =>
    props.type === "fill" &&
    css`
      background-color: #e27c1e;
      font-weight: ${WEIGHTS.semiBold};
    `}
  ${(props) =>
    props.type === "outline" &&
    css`
      background-color: #e27c1e;
      border: 1px solid white;
    `}

  color: #fff;
  font-weight: ${WEIGHTS.semiBold};
  width: 100%;
  text-align: center;
  border: none;
  border-radius: 24px;
  padding: 12px;
`;

export default Button;
