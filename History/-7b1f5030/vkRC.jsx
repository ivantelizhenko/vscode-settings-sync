import Spinner from './Spinner.jsx';
import Message from './Message.jsx';

import styles from './CountriesList.jsx';
import CountryItem from './CountryItem.jsx';

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  console.log(cities);
  const countries = cities.reduce((arr, city) => {
    console.log(arr, city);
    if (!arr.map(el => el.city).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
