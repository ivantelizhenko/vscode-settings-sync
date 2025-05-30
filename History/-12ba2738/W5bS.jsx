import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Header from './Header';
import { useEffect } from 'react';

function AppLayout() {
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    navigation('/');
  }, []);

  useEffect(() => {
    console.log(params);
  }, [params]);

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
