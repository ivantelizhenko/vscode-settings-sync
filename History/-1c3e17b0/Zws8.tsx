import { CardType } from '@/app/AddNewCardsQuest';

type RowQuestProps = {
  rowTitle: string;
  data: { id: string; title: string; author: string; cards: CardType[] }[];
};

function RowQuests({ rowTitle, data }: RowQuestProps) {
  return (
    <div>
      <h3>{rowTitle}</h3>
      <QuestCardsViewMini />
    </div>
  );
}

export default RowQuests;
