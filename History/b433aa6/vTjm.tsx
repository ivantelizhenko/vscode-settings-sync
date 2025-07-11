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
    <div className="bg-white h-full ">
      <div className="flex gap-24  items-center px-12 py-6 ">
        <div className="avatar">
          <div className="w-64 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <h2 className="font-bold text-3xl mb-40">Full name</h2>
      </div>
      <ListQuests quests={testQuests} />
    </div>
  );
}

export default profile;
