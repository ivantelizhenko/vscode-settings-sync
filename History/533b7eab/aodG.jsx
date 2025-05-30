import styled from "styled-components";
import { WEIGHTS } from "../constants";

const Button = styled.button`
  background-color: #e27c1e;
  color: #fff;
  font-weight: ${WEIGHTS.semiBold};
  width: 100%;
  text-align: center;
  border: none;
  border-radius: 24px;
  padding: 12px;
`;

export default Button;
