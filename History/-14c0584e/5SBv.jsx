import styled from "styled-components";
import Overview from "./Overview";
import { QUERIES } from "../constants";

function Main({ page }) {
  return <Wrapper>{page === "overview" && <Overview />}</Wrapper>;
}

const Wrapper = styled.main`
  padding: 24px 16px;
  background-color: white;

  @media ${QUERIES.laptopAndUp} {
    padding: 48px 60px;
  }
`;

export default Main;
