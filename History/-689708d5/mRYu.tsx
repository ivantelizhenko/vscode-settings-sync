import ListQuestItem from './ListQuestItem';

export type Quest = {
  title: string;
  description: string;
  author: string;
  time: number;
};

function ListQuests({ quests }: { quests: Quest[] }) {
  return (
    <ul>
      {quests.map(data => (
        <ListQuestItem questData={data} />
      ))}
    </ul>
  );
}

export default ListQuests;
