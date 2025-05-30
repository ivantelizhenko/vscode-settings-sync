import styles from './ListItem.module.css';
import { formatListItemNote } from '../Utils/helpers';
import {
  TITLE_PRIVIEW_LENGTH,
  DESCRIPTION_PRIVIEW_LENGTH,
} from '../Utils/constants';
import { useNotes } from '../Contexts/NotesContext';

function ListItem({ note }) {
  const { title, description, date, id } = note;
  const { selectedNoteId, setSelectedNoteId } = useNotes();

  return (
    <div
      className={`${styles.container} ${
        selectedNoteId === id ? styles.containerActive : ''
      }`}
      onClick={() => {
        setSelectedNoteId(id);
      }}
    >
      <h2 className={styles.title}>title</h2>

      <p className={styles.description}>description</p>
    </div>
  );
}

export default ListItem;
