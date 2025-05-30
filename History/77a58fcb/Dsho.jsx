import SideBar from '../components/SideBar';
import Map from '../components/Map';

import styles from './AppLayout.module.css';
import User from '../components/User';
import ProtectedRoute from './ProtectedRoute';

function AppLayout() {
  return (
    <div className={styles.app}>
      <ProtectedRoute>
        <SideBar />
        <Map />
        <User />
      </ProtectedRoute>
    </div>
  );
}

export default AppLayout;
