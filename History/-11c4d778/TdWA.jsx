import { Outlet, useNavigation } from 'react-router-dom';

import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-y-4">
      {isLoading && <Loader />}
      <Header />

      <main className="max-w- overflow-scroll bg-red-500">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
