import Heading from "./Heading";
import Image from "./Image";
import Spacer from "./Spacer";
import Button from "./Button";
import styled from "styled-components";
import { QUERIES } from "../constants";

function Hero() {
  return (
    <Wrapper>
      <Image alt="" src="" />
      <Spacer size={24} />
      <Heading as="h2">Виграй хвостику смаколик</Heading>
      <Spacer size={16} />
      <p>Виграйте смачний корм або іграшки для свого улюбленця за донат.</p>
      <Spacer size={32} />
      <Button type="fill" style={{ "--width": "100%" }}>
        Взяти участь
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media ${QUERIES.laptop} {
    display: flex;
  }
`;

export default Hero;
