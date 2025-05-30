import styled from "styled-components";
import { QUERIES } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";
import Spacer from "./Spacer";

function Donate() {
  return (
    <Wrapper>
      <Description>
        <Heading as="h2" desktopSize={48}>
          Підтримайте тих, хто не може сказати “допоможи”
        </Heading>
        <Spacer size={16} />
        <p>
          Ваша допомога — це повна миска, тепле місце й шанс знайти справжній
          дім для сотень врятованих тварин.
        </p>
        <Spacer size={32} />
      </Description>
      <Image alt="" src="/public/hero/third.png" />
      <DonateButton type="fill">Задонатити</DonateButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-rows: fit-content;
    grid-template-areas: "image description" "image button";
  }
`;

const Description = styled.div`
  margin-bottom: 32px;

  @media ${QUERIES.laptopAndUp} {
    margin-bottom: 0;
  }
`;

const DonateButton = styled(Button)`
  --width: 100%;
  margin-top: 32px;

  @media ${QUERIES.laptopAndUp} {
    place-content: start;
    grid-area: button;
    --width: 200px;
    margin-top: 0;
  }
`;

export default Donate;
