import { CardType } from '@/app/AddNewCardsQuest';
import QuestCardsViewMini from '../AddNewQuest/Card/QuestCardsViewMini';

export type DataType = {
  id: string;
  title: string;
  author: string;
  cards: CardType[];
};

type RowQuestProps = {
  rowTitle: string;
  data: DataType[];
};

function RowQuests({ rowTitle, data }: RowQuestProps) {
  return (
    <div>
      <h3>{rowTitle}</h3>
      {data.map(questData => (
        <QuestCardsViewMini key={questData.id} data={questData} />
      ))}
    </div>
  );
}

export default RowQuests;
