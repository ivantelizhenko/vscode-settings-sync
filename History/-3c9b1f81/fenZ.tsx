import { DataType } from '../../Dashboard/RowQuests';

function QuestCardsViewMini({ data }: { data: DataType }) {
  const { title, author, cards } = data;

  return (
    <div className="flex min-w-80 flex-col gap-5 bg-slate-600 p-2.5 px-5 font-medium text-stone-200">
      <div className="flex flex-col gap-2">
        <h4>{title}</h4>
        <span>{cards.length}</span>
      </div>
      <p>{author}</p>
    </div>
  );
}

export default QuestCardsViewMini;
