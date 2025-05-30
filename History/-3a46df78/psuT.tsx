import Profile from './Profile';
import AddNewCardsQuest from './AddNewCardsQuest';
import Dashboard from './Dashboard';

function page() {
  return (
    <div className="bg-third min-h-screen w-full px-24 py-12">
      {/* <Profile /> */}
      {/* <AddNewCardsQuest /> */}
      <Dashboard />
    </div>
  );
}

export default page;
