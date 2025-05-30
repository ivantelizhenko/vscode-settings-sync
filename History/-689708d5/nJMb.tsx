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
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>title</th>
            <th>autor</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {quests.map(data => (
            <ListQuestItem key={data.id} questData={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListQuests;

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>;
