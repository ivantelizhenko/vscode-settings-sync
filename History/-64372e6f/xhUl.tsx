import RowQuests from './components/Dashboard/RowQuests';

const dataTest = [
  {
    id: Math.random(),
    title: 'title1',
    author: 'autor1',
    time: 3,
    cards: [
      { id: Math.random(), term: 'term1', definition: 'def1' },
      { id: Math.random(), term: 'term2', definition: 'def2' },
      { id: Math.random(), term: 'term3', definition: 'def3' },
    ],
  },
  {
    id: Math.random(),
    title: 'title2',
    author: 'autor2',
    time: 5,
    cards: [
      { id: Math.random(), term: 'term1', definition: 'def1' },
      { id: Math.random(), term: 'term2', definition: 'def2' },
    ],
  },
  {
    id: Math.random(),
    title: 'title3',
    author: 'autor3',
    time: 10,
    cards: [
      { id: Math.random(), term: 'term1', definition: 'def1' },
      { id: Math.random(), term: 'term2', definition: 'def2' },
      { id: Math.random(), term: 'term3', definition: 'def3' },
      { id: Math.random(), term: 'term4', definition: 'def4' },
      { id: Math.random(), term: 'term5', definition: 'def5' },
    ],
  },
  {
    id: Math.random(),
    title: 'title4',
    author: 'autor4',
    time: 30,
    cards: [
      { id: Math.random(), term: 'term1', definition: 'def1' },
      { id: Math.random(), term: 'term2', definition: 'def2' },
      { id: Math.random(), term: 'term3', definition: 'def3' },
      { id: Math.random(), term: 'term4', definition: 'def4' },
    ],
  },
  {
    id: Math.random(),
    title: 'title5',
    author: 'autor5',
    time: 20,
    cards: [
      { id: Math.random(), term: 'term1', definition: 'def1' },
      { id: Math.random(), term: 'term2', definition: 'def2' },
      { id: Math.random(), term: 'term3', definition: 'def3' },
      { id: Math.random(), term: 'term4', definition: 'def4' },
      { id: Math.random(), term: 'term5', definition: 'def5' },
      { id: Math.random(), term: 'term6', definition: 'def6' },
    ],
  },
];

function Dashboard() {
  return (
    <div>
      <RowQuests rowTitle="title" data={dataTest} />
    </div>
  );
}

export default Dashboard;
