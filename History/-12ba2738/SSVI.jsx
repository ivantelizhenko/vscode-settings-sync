import { Outlet, useNavigate } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Header from './Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOneColor } from '../features/rtk/rtkSlice';

function AppLayout() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  dispatch(addOneColor('red'));

  useEffect(() => {
    navigation('/');
  }, []);

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
