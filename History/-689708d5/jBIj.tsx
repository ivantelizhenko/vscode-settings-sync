import ListQuestItem from './ListQuestItem';

export type Quests = {
  name: string;
  description: string;
  author: string;
  time: number;
};

function ListQuests({ quests }: { quests: Quests[] }) {
  return (
    <ul>
      {quests.map(data => (
        <ListQuestItem questData={data} />
      ))}
    </ul>
  );
}

export default ListQuests;
