import { Quest } from './ListQuests';

function ListQuestItem({ questData }: { questData: Quest }) {
  // TODO: подумати, що саме відтворювати в історії пройдених квестів
  const { title, author } = questData;

  return (
    <tr>
      <th>1</th>
      <td>Cy Ganderton</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
    </tr>
  );
}

export default ListQuestItem;
