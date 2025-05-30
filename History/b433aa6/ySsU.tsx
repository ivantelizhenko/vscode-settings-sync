import ListQuests from '../components/ListQuests';

const testQuests = [
  { title: 'title1', description: 'desc1', author: 'auth1', time: 10 },
  { title: 'title2', description: 'desc2', author: 'auth2', time: 20 },
  { title: 'title3', description: 'desc3', author: 'auth3', time: 30 },
];

function Profile() {
  return (
    <div>
      <img src="" alt="" />
      <h2></h2>
      <ListQuests quests={testQuests} />
    </div>
  );
}

export default Profile;
