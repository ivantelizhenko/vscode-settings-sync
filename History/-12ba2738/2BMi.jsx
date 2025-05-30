import { Outlet, useNavigate } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Header from './Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOneColor, addTwoColor, getColors } from '../features/rtk/rtkSlice';

function AppLayout() {
  const dispatch = useDispatch();
  const colors = useSelector(getColors);
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(addOneColor('red'));
    dispatch(addTwoColor('orange', 'green'));

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
