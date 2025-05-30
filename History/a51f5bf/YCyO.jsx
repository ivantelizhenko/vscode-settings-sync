import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";
import Spacer from "./Spacer";

function Donate() {
  return (
    <section>
      <Heading as="h2">Підтримайте тих, хто не може сказати “допоможи”</Heading>
      <Spacer size={16} />
      <p>
        Ваша допомога — це повна миска, тепле місце й шанс знайти справжній дім
        для сотень врятованих тварин.
      </p>
      <Spacer size={32} />
      <Image alt="" src="" />
      <Spacer size={32} />
      <Button>Задонатити</Button>
    </section>
  );
}

export default Donate;
