import ListQuestItem from './ListQuestItem';

export type Quest = {
  id: number;
  title: string;
  description: string;
  author: string;
  time: number;
};

function ListQuests({ quests }: { quests: Quest[] }) {
  return (
    <ul>
      {quests.map(data => (
        <ListQuestItem key={data.id} questData={data} />
      ))}
    </ul>
  );
}

export default ListQuests;
