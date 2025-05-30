import { DataType } from '../../Dashboard/RowQuests';

function QuestCardsViewMini({ data }: { data: DataType }) {
  const { title, author, cards } = data;

  return (
    <div className="bg-slate-600 p-2.5 px-5 text-stone-200">
      <h4>{title}</h4>
      <span>{cards.length}</span>
      <p>{author}</p>
    </div>
  );
}

export default QuestCardsViewMini;
