import ListQuestItem from './ListQuestItem';

type QuestsArray = {
  name: string;
  description: string;
  author: string;
  time: number;
}[];

function ListQuests({ quests }: { quests: QuestsArray }) {
  return (
    <ul>
      {quests.map(data => (
        <ListQuestItem questData={data} />
      ))}
    </ul>
  );
}

export default ListQuests;
