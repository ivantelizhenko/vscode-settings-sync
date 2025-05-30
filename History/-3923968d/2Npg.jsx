import styled from "styled-components";
import Heading from "./Heading";
import { WEIGHTS } from "../constants";
import Spacer from "./Spacer";

function Hero() {
  return (
    <Wrapper>
      <ImageWrapper>
        <img alt="" src="" />
      </ImageWrapper>
      <Spacer size={24} />
      <Heading as="h2">Виграй хвостику смаколик</Heading>
      <Spacer size={16} />
      <p>Виграйте смачний корм або іграшки для свого улюбленця за донат.</p>
      <Spacer size={32} />
      <Button>Взяти участь</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px 16px;
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

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

export default Hero;
