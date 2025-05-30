import { CardType } from '@/app/AddNewQuest';

function Card({
  card,
  numOfCard,
  handleDelete,
}: {
  card: CardType;
  numOfCard: number;
  handleDelete: (id: string) => void;
}) {
  const { id, term, definition } = card;

  return (
    <div className="mb-4 flex flex-col gap-2 rounded-xl bg-primary p-8">
      <div className="flex w-full">
        <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300">
          {term}
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300">
          {definition}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl">{numOfCard}</span>
        <button className="btn btn-wide" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
