import { CardType } from '@/app/AddNewQuest';

function Card({ card, numOfCard }: { card: CardType; numOfCard: number }) {
  const { term, definition } = card;

  return (
    <div className="flex w-full bg-purple-300">
      <div className="card grid h-20 flex-grow place-items-center rounded-box">
        {numOfCard}
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="card grid h-20 flex-grow place-items-center rounded-box">
        {definition}
      </div>
    </div>
  );
}

export default Card;
