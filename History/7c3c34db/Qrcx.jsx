import { useNotes } from '../Contexts/NotesContext.jsx';
import styles from './List.module.css';
import ListItem from './ListItem.jsx';

function List() {
  const { notes } = useNotes();

  return (
    <ul className={styles.list}>
      {notes.map(data => (
        <ListItem key={data.id} data={data} />
      ))}
    </ul>
  );
}

export default List;
