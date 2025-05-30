import SideBar from '../components/SideBar';
import Map from '../components/Map';

import { useAuth } from '../contexts/FakeAuthContext';
import styles from './AppLayout.module.css';
import User from '../components/User';

function AppLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      {isAuthenticated ? <User /> : ''}
    </div>
  );
}

export default AppLayout;
