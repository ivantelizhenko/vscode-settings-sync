import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Header from './Header';

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
