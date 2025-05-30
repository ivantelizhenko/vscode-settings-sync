import styles from './Logo.module.css';

function Search() {
  return (
    <div>
      <input placeholder="Пошук" className={styles.input} />
    </div>
  );
}

export default Search;
