import styled from "styled-components";
import Hero from "./Hero";
import Cta from "./Cta";
import Donate from "./Donate";
import { QUERIES } from "../constants";

function Overview() {
  return (
    <Wrapper>
      <Hero />
      <Cta />
      <Donate />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: white;
`;

export default Overview;
