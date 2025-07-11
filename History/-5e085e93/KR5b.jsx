import Spinner from './Spinner.jsx';
import Message from './Message.jsx';

import styles from './CityList.module.css';
import CityItem from './CityItem.jsx';

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message />;

  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
