import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Header from './Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../features/rtk/rtkSlice';
import '../utils/asyncFunctionWithFetchAPI';
import { useQuery } from '@tanstack/react-query';
import { asyncFunctionWithFetchAPI } from '../utils/asyncFunctionWithFetchAPI';

function AppLayout() {
  const dispatch = useDispatch();

  // const navigation = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ['example'],
    queryFn: asyncFunctionWithFetchAPI,
  });

  // useEffect(() => {
  //   // Redux/RTK
  //   dispatch(addOneColor('red'));
  //   dispatch(addTwoColor('orange', 'green'));

  //   // React Router
  //   navigation('/');
  // }, [dispatch, navigation]);

  useEffect(() => {
    dispatch(addData(data));
  }, [data, dispatch]);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
