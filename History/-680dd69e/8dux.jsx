import styles from './CityItem.module.css';

function CityItem({ city }) {
  console.log(city);
  const { cityName, country, emoji, date, notes } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
    </li>
  );
}

export default CityItem;
