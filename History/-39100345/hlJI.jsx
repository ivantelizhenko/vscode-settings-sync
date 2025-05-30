import { useNotes } from '../Contexts/NotesContext.jsx';
import styles from './List.module.css';
import ListItem from './ListItem.jsx';

function List() {
  const { notes, searchValue, filteredNotes } = useNotes();

  const currNotes = searchValue ? filteredNotes : notes;

  return (
    <ul className={styles.list}>
      {currNotes
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map(note => (
          <ListItem key={note.id} note={note} />
        ))}
    </ul>
  );
}

export default List;
