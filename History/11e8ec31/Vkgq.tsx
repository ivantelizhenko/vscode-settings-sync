import { Quest } from './ListQuests';

function ListQuestItem({ questData }: { questData: Quest }) {
  const { title } = questData;

  return <li>item</li>;
}

export default ListQuestItem;
