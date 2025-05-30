import styles from './Search.module.css';
import { useNotes } from '../Contexts/NotesContext';

function Search() {
  return (
    <div>
      <input
        placeholder="Пошук"
        type="text"
        className={styles.input}
        onChange={() => {}}
      />
    </div>
  );
}

export default Search;
