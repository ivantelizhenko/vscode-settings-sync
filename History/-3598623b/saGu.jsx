import { useState } from 'react';
import styles from './Search.module.css';

function Search() {
  const [search, setSearcj] = useState('');

  return (
    <div>
      <input placeholder="Пошук" type="text" className={styles.input} />
    </div>
  );
}

export default Search;
