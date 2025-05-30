import { CardType } from '@/app/AddNewQuest';

function Card({ card, numOfCard }: { card: CardType; numOfCard: number }) {
  const { term, definition } = card;

  return (
    <div className="mb-4 flex flex-col gap-2 rounded-xl bg-primary p-2">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{numOfCard}</span>
        <button className="btn btn-square btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex w-full">
        <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300">
          {term}
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300">
          {definition}
        </div>
      </div>
    </div>
  );
}

export default Card;
