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
