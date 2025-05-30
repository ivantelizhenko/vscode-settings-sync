import { Outlet, useNavigate } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Header from './Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOneColor, addTwoColor, getColors } from '../features/rtk/rtkSlice';
import '../utils/asyncFunctionWithFetchAPI';
import { useQuery } from '@tanstack/react-query';
import { asyncFunctionWithFetchAPI } from '../utils/asyncFunctionWithFetchAPI';

function AppLayout() {
  const dispatch = useDispatch();
  const colors = useSelector(getColors);
  const navigation = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ['example'],
    queryFn: asyncFunctionWithFetchAPI,
  });

  useEffect(() => {
    // Redux/RTK
    dispatch(addOneColor('red'));
    dispatch(addTwoColor('orange', 'green'));

    // React Router
    navigation('/');

    //React Query
  }, []);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>There is an error</div>;
  console.log(data);
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
