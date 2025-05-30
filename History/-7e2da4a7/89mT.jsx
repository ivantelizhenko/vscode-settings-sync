import styled from "styled-components";
import ActionCard from "./ActionCard";
import Heading from "./Heading";
import Image from "./Image";
import Spacer from "./Spacer";
import { QUERIES } from "../constants";

function Cta({ setPage }) {
  return (
    <Wrapper>
      <Heading as="h2" $size={72}>
        Врятуй. Прилаштуй. Знайди друга.
      </Heading>
      <Image alt="" src="/public/hero/second.png" />
      <Spacer size={16} />
      <Cards>
        <ActionCard
          handleSetPage={() => {}}
          title="Гав? Мяу? Додай нас сюди!"
          description="Волонтериш або допомагаєш тваринам? Публікуй оголошення — це справді працює!"
          href="#"
        />
        <Spacer size={16} />
        <ActionCard
          handleSetPage={() => {}}
          title="Притулки, які допоможуть"
          description="Залиши запит — і ми допоможемо знайти притулок, де подбають."
          href="#"
        />
        <Spacer size={16} />
        <ActionCard
          handleSetPage={() => {
            setPage("cardsList");
          }}
          title="Хочу взяти тваринку"
          description="Даруйте дім тим, хто чекає на любов. Оберіть друга серед врятованих тварин."
          href="#"
        />
      </Cards>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-areas:
      "heading"
      "image"
      "cards";
  }
`;

const Cards = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-auto-flow: column;
    gap: 24px;
    grid-area: cards;
  }
`;

export default Cta;
