import { useState } from "react";
import styled from "styled-components";
import Overview from "./Overview";
import { QUERIES } from "../constants";

function Main() {
  const [currentPage, setCurrentPage] = useState("overview");

  return <Wrapper>{currentPage === "overview" && <Overview />}</Wrapper>;
}

const Wrapper = styled.main`
  padding: 24px 16px;

  @media ${QUERIES.laptopAndUp} {
  }
`;

export default Main;
