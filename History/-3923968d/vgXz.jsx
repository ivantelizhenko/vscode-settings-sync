import Heading from "./Heading";
import Image from "./Image";
import Spacer from "./Spacer";
import Button from "./Button";

function Hero() {
  return (
    <section>
      <Image alt="" src="" />
      <Spacer size={24} />
      <Heading as="h2">Виграй хвостику смаколик</Heading>
      <Spacer size={16} />
      <p>Виграйте смачний корм або іграшки для свого улюбленця за донат.</p>
      <Spacer size={32} />
      <Button>Взяти участь</Button>
    </section>
  );
}

export default Hero;
