import RowQuests from './components/Dashboard/RowQuests';

const dataTest =  [ { title: string; author: string; cards: CardType[] }];

function Dashboard() {
  return (
    <div>
      <RowQuests rowTitle="title" data={} />
    </div>
  );
}

export default Dashboard;
