import { useState } from 'react';
import styles from './Search.module.css';
import { useNotes } from '../Contexts/NotesContext';

function Search() {
  const { setSearchedValue } = useNotes();
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        placeholder="Пошук"
        type="text"
        className={styles.input}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
