import { CardType } from '@/app/AddNewCardsQuest';
import QuestCardsViewMini from '../AddNewQuest/Card/QuestCardsViewMini';

export type DataType = {
  id: string;
  title: string;
  author: string;
  time: number;
  cards: CardType[];
};

type RowQuestProps = {
  rowTitle: string;
  data: DataType[];
};

function RowQuests({ rowTitle, data }: RowQuestProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-4xl font-bold">{rowTitle}</h3>
      <div className="carousel flex gap-4">
        {data.map(questData => (
          <QuestCardsViewMini
            key={questData.id}
            data={questData}
            onClick={handleSeceltQuest}
          />
        ))}
      </div>
    </div>
  );
}

export default RowQuests;
