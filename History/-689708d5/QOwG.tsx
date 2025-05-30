import ListQuestItem from './ListQuestItem';

type QuestsArray = { name: string; description: string; time: number }[];

function ListQuests({ quests }) {
  return (
    <ul>
      {quests.map(data => (
        <ListQuestItem questData={data} />
      ))}
    </ul>
  );
}

export default ListQuests;
