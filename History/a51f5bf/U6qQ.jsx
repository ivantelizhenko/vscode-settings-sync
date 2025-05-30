import { QUERIES } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";
import Spacer from "./Spacer";

function Donate() {
  return (
    <section>
      <Heading as="h2" desktopSize={48}>
        Підтримайте тих, хто не може сказати “допоможи”
      </Heading>
      <Spacer size={16} />
      <p>
        Ваша допомога — це повна миска, тепле місце й шанс знайти справжній дім
        для сотень врятованих тварин.
      </p>
      <Spacer size={32} />
      <Image alt="" src="/public/hero/third.png" />
      <Spacer size={32} />
      <Button type="fill" style={{ "--width": "100%" }}>
        Задонатити
      </Button>
    </section>
  );
}

const Wrapper = styled.section`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "description image";
  }
`;

export default Donate;
