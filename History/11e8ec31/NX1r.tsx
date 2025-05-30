import { Quest } from './ListQuests';

function ListQuestItem({ questData }: { questData: Quest }) {
  // TODO: подумати, що саме відтворювати в історії пройдених квестів
  const { title, author } = questData;

  return <li>item</li>;
}

export default ListQuestItem;
