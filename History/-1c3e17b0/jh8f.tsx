import { CardType } from '@/app/AddNewCardsQuest';

type RowQuestProps = {
  rowTitle: string;
  data: { id: string; title: string; author: string; cards: CardType[] }[];
};

function RowQuests({ rowTitle, data }: RowQuestProps) {
  return (
    <div>
      <h3>{rowTitle}</h3>
      {data.map(questData => (
        <QuestCardsViewMini data={questData} />
      ))}
    </div>
  );
}

export default RowQuests;
