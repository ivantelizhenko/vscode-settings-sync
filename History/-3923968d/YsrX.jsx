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
      <HeroDivider size={24} />
      <Description>
        <Heading as="h2" desktopSize={64}>
          Виграй хвостику смаколик
        </Heading>
        <Spacer size={16} />
        <Paragraph>
          Виграйте смачний корм або іграшки для свого улюбленця за донат.
        </Paragraph>
        <Spacer size={32} />
        <HeroButton type="fill">Взяти участь</HeroButton>
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

const HeroDivider = styled(Spacer)`
  background-color: red;
`;
const Description = styled.div`
  @media ${QUERIES.laptopAndUp} {
    grid-area: description;
    display: grid;
    place-content: center;
  }
`;

const Paragraph = styled.p`
  @media ${QUERIES.laptopAndUp} {
    font-size: 1.25rem;
  }
`;

const HeroButton = styled(Button)`
  width: 100%;
  @media ${QUERIES.laptopAndUp} {
    width: 200px;
  }
`;

export default Hero;
