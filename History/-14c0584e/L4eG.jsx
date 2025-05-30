import { useState } from "react";
import styled from "styled-components";

function Main() {
  const [currentPage, setCurrentPage] = useState("overview");

  return <Wrapper>{(currentPage = "overview" && <Overview />)}</Wrapper>;
}

const Wrapper = styled.main`
  padding: 24px 16px;
`;

export default Main;
