import { useState } from 'react';
import styles from './Search.module.css';

function Search() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        placeholder="Пошук"
        type="text"
        className={styles.input}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
