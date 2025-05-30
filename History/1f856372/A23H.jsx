import styled from "styled-components";
import Hero from "./Hero";
import Cta from "./Cta";
import DonateSection from "./DonateSection";

function Overview() {
  return (
    <Wrapper>
      <Hero />
      <Cta />
      <DonateSection />
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
