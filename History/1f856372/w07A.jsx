import styled from "styled-components";
import Hero from "./Hero";
import Cta from "./Cta";
import DonateSection from "./DonateSection";

function Overview({ setPage }) {
  return (
    <Wrapper>
      <Hero />
      <Cta setPage={setPage} />
      <DonateSection setPage={setPage} />
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
