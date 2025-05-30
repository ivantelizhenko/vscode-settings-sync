import { CardType } from '@/app/AddNewQuest';

function Card({ card, numOfCard }: { card: CardType; numOfCard: number }) {
  const { term, definition } = card;

  return (
    <div>
      <span>{numOfCard}</span>
      <p>{term}</p>
      <p>{definition}</p>
    </div>
  );
}

export default Card;
