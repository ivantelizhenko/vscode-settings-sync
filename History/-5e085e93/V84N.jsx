import Spinner from './Spinner.jsx';

import styles from './CityList.module.css';

function CityList({ cities, isLoading }) {
  if (isLoading) <Spinner />;

  return <ul className={styles.cityList}>List</ul>;
}

export default CityList;
