import styled from "styled-components";
import { QUERIES } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";
import Spacer from "./Spacer";

function Donate() {
  return (
    <section>
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
      <Spacer size={32} />
      <DonateButton type="fill">Задонатити</DonateButton>
    </section>
  );
}

const Wrapper = styled.section`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "image description ";
  }
`;

const DonateButton = styled(Button)`
  --width: 100%;

  @media ${QUERIES.laptopAndUp} {
    --width: 200px;
  }
`;

export default Donate;
