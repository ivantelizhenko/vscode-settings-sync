import Profile from './Profile';
import AddNewCardsQuest from './AddNewCardsQuest';
import Dashboard from './Dashboard';
import CardsQuest from './CardsQuest';

function page() {
  return (
    <div data-theme="cupcake">
      <div className="bg-base-300 min-h-screen w-full px-24 py-12">
        {/* <Profile /> */}
        {/* <AddNewCardsQuest /> */}
        <Dashboard />
        {/* <CardsQuest /> */}
      </div>
    </div>
  );
}

export default page;
