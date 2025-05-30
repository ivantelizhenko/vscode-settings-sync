import styled from "styled-components";
import ActionCard from "./ActionCard";
import Heading from "./Heading";
import Image from "./Image";
import Spacer from "./Spacer";

function Cta() {
  return (
    <Wrapper>
      <Heading as="h2" desktopSize={72}>
        Врятуй. Прилаштуй. Знайди друга.
      </Heading>
      <Image alt="" src="" />
      <Spacer size={16} />
      <Cards>
        <ActionCard
          title="Гав? Мяу? Додай нас сюди!"
          description="Волонтериш або допомагаєш тваринам? Публікуй оголошення — це справді працює!"
          href="#"
        />
        <Spacer size={16} />
        <ActionCard
          title="Притулки, які допоможуть"
          description="Залиши запит — і ми допоможемо знайти притулок, де подбають."
          href="#"
        />
        <Spacer size={16} />
        <ActionCard
          title="Хочу взяти тваринку"
          description="Даруйте дім тим, хто чекає на любов. Оберіть друга серед врятованих тварин."
          href="#"
        />
      </Cards>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Cards = styled.div``;

export default Cta;
