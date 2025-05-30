import ListQuestItem from './ListQuestItem';

function ListQuests({ quests }) {
  return (
    <ul>
      {quests.map(questData => (
        <ListQuestItem />
      ))}
    </ul>
  );
}

export default ListQuests;
