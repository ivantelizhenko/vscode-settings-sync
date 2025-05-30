import ListQuests from './components/ListQuests';

const testQuests = [
  {
    id: Math.random(),
    title: 'title1',
    description: 'desc1',
    author: 'auth1',
    time: 10,
  },
  {
    id: Math.random(),
    title: 'title2',
    description: 'desc2',
    author: 'auth2',
    time: 20,
  },
  {
    id: Math.random(),
    title: 'title3',
    description: 'desc3',
    author: 'auth3',
    time: 30,
  },
];

function profile() {
  return (
    <div>
      <img src="" alt="Avatar" />
      <h2>Full name</h2>
      <ListQuests quests={testQuests} />
    </div>
  );
}

export default profile;
