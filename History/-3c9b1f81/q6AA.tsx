import { DataType } from '../../Dashboard/RowQuests';

function QuestCardsViewMini({ data }: { data: DataType }) {
  const { title, author, cards } = data;

  return (
    <div className="flex min-w-80 flex-col gap-5 bg-slate-600 p-2.5 px-5 font-medium text-stone-200">
      <div className="flex flex-col gap-2">
        <h4>{title}</h4>
        <span className="w-fit rounded-sm bg-slate-500 px-1 py-0.5">
          {cards.length} terms
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default QuestCardsViewMini;
