import { CardType } from '@/app/AddNewQuest';

function Card({ card, numOfCard }: { card: CardType; numOfCard: number }) {
  const { term, definition } = card;

  return (
    <div className="flex w-full bg-purple-300">
      <div className="card grid flex-grow place-items-center rounded-box bg-base-300 py-20">
        {numOfCard}
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="card grid flex-grow place-items-center rounded-box bg-base-300 py-20">
        {definition}
      </div>
    </div>
  );
}

export default Card;
