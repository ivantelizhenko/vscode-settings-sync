import { CardType } from '@/app/AddNewQuest';

function Card({ card }: { card: CardType; numOfCard: number }) {
  const { term, definition } = card;

  return (
    <div>
      <span>numOfCard</span>
    </div>
  );
}

export default Card;
