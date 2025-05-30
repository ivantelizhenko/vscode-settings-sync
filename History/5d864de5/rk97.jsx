import styles from './Search.module.css';

function Search() {
  return (
    <div>
      <input placeholder="Пошук" type="text" className={styles.input} />
    </div>
  );
}

export default Search;
