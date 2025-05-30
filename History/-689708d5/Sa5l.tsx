import ListQuestItem from './ListQuestItem';

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
