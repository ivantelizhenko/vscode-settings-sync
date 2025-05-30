import RowQuests from './components/Dashboard/RowQuests';

const dataTest =  [ { title: 'title1', author: 'autor1', cards: CardType[] }];

function Dashboard() {
  return (
    <div>
      <RowQuests rowTitle="title" data={} />
    </div>
  );
}

export default Dashboard;
