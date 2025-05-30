import { CardType } from '@/app/AddNewCardsQuest';

type RowQuestProps = {
  rowTitle: string;
  data: { title: string; author: string; cards: CardType[] };
};

function RowQuests({ rowTitle, data }: RowQuestProps) {
  const { title, author, cards } = data;

  return (
    <div>
      <h3>{rowTitle}</h3>
      <
    </div>
  );
}

export default RowQuests;
