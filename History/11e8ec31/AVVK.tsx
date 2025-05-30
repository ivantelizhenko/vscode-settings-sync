import { Quest } from './ListQuests';

function ListQuestItem({ questData }: { questData: Quest }) {
  const { ...something } = questData;

  return <li>item</li>;
}

export default ListQuestItem;
