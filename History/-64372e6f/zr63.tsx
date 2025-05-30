import RowQuests from './components/Dashboard/RowQuests';

const dataTest = [
  {
    title: 'title1',
    author: 'autor1',
    cards: [
      { id: Math.random(), term: 'term1', definition: 'def1' },
      { id: Math.random(), term: 'term2', definition: 'def2' },
      { id: Math.random(), term: 'term3', definition: 'def3' },
    ],
  },
];

function Dashboard() {
  return (
    <div>
      <RowQuests rowTitle="title" data={} />
    </div>
  );
}

export default Dashboard;
