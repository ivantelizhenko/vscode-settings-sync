import { useNotes } from '../Contexts/NotesContext.jsx';
import styles from './List.module.css';
import ListItem from './ListItem.jsx';

function List() {
  const { filteredNotes } = useNotes();

  return (
    <ul className={styles.list}>
      {filteredNotes
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map(note => (
          <ListItem key={note.id} note={note} />
        ))}
    </ul>
  );
}

export default List;
