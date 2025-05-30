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

        <p>
          Ваша допомога — це повна миска, тепле місце й шанс знайти справжній
          дім для сотень врятованих тварин.
        </p>
        <Spacer size={32} />
        <DonateButtonDesktop type="fill" style={{ "--width": "200px" }}>
          Задонатити
        </DonateButtonDesktop>
      </Description>
      <Image alt="" src="/public/hero/third.png" />
      <DonateButtonMobile type="fill" style={{ "--width": "100%" }}>
        Задонатити
      </DonateButtonMobile>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "image description";
  }
`;

const Description = styled.div`
  margin-bottom: 32px;

  & p {
    margin-top: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-bottom: 0;

    & p {
      margin-top: 24px;
    }
  }
`;

const DonateButtonDesktop = styled(Button)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 12px;
    display: block;
  }
`;

const DonateButtonMobile = styled(Button)`
  display: block;
  margin-top: 32px;

  @media ${QUERIES.laptopAndUp} {
    margin: 0;
    display: none;
  }
`;

export default Donate;
