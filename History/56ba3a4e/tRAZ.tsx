import { CardType } from '@/app/AddNewQuest';

function Card({ card, numOfCard }: { card: CardType; numOfCard: number }) {
  const { term, definition } = card;

  return (
    <div className="flex w-full">
      <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300">
        {numOfCard}
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300">
        {definition}
      </div>
    </div>
  );
}

export default Card;
