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
      <Description>
        <Heading as="h2">Виграй хвостику смаколик</Heading>
        <Spacer size={16} />
        <p>Виграйте смачний корм або іграшки для свого улюбленця за донат.</p>
        <Spacer size={32} />
        <Button type="fill" style={{ "--width": "100%" }}>
          Взяти участь
        </Button>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "description image";
  }
`;
const Description = styled.div`
  @media ${QUERIES.laptopAndUp} {
    grid-area: description;
    display: grid;
    place-content: center;
  }
`;

export default Hero;
