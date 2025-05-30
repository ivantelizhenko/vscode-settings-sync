import { CardType } from '@/app/AddNewQuest';

function Card({ card, numOfCard }: { card: CardType; numOfCard: number }) {
  const { term, definition } = card;

  return (
    <div>
      <div>
        <span>numOfCard</span>
      </div>
      <div className="flex w-full bg-purple-300">
        <div className="card grid h-20 flex-grow place-items-center rounded-box">
          {term}
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card grid h-20 flex-grow place-items-center rounded-box">
          {definition}
        </div>
      </div>
    </div>
  );
}

export default Card;
