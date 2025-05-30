import Spinner from './Spinner.jsx';

import styles from './CityList.module.css';

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return <ul className={styles.cityList}>{cities.map()}</ul>;
}

export default CityList;
