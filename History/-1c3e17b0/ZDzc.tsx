import { CardType } from '@/app/AddNewQuest';

type RowQuestProps = {
  rowTitle: string;
  data: { title: string; author: string; cards: CardType[] };
};

function RowQuests({ rowTitle, data }: RowQuestProps) {
  return (
    <div>
      <h3>{rowTitle}</h3>
    </div>
  );
}

export default RowQuests;
