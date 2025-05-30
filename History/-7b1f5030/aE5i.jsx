import Spinner from './Spinner.jsx';
import Message from './Message.jsx';

import styles from './CountriesList.jsx';
import CityItem from './CityItem.jsx';

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.countriesList}>
      {cities.map(city => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
