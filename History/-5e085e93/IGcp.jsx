import Spinner from './Spinner.jsx';

import styles from './CityList.module.css';
import CityItem from './CityItem.jsx';

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem city={city} />
      ))}
    </ul>
  );
}

export default CityList;
