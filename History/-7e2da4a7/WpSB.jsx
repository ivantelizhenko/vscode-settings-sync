import styled from "styled-components";
import ActionCard from "./ActionCard";
import Heading from "./Heading";
import Image from "./Image";

function Cta() {
  return (
    <Wrapper>
      <Heading as="h2">Врятуй. Прилаштуй. Знайди друга.</Heading>
      <Image alt="" src="" />
      <ActionCard
        title="Гав? Мяу? Додай нас сюди!"
        description="Волонтериш або допомагаєш тваринам? Публікуй оголошення — це справді працює!"
        href="#"
      />
      <ActionCard
        title="Притулки, які допоможуть"
        description="Залиши запит — і ми допоможемо знайти притулок, де подбають."
        href="#"
      />
      <ActionCard
        title="Хочу взяти тваринку"
        description="Даруйте дім тим, хто чекає на любов. Оберіть друга серед врятованих тварин."
        href="#"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Cta;
