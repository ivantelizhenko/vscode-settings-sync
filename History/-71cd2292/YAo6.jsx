import styles from './ListItem.module.css';
import { formatListItemNote, shorterText } from '../Utils/helpers';
import {
  TITLE_PRIVIEW_LENGTH,
  DESCRIPTION_PRIVIEW_LENGTH,
} from '../Utils/constants';
import { useNotes } from '../Contexts/NotesContext';
import Highlight from './Highlight';

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
      <Highlight text="11111" as="h1" />
      <h2 className={styles.title}>
        {title.length < 1
          ? 'Нова нотатка'
          : shorterText(title, TITLE_PRIVIEW_LENGTH)}
      </h2>

      <span>{formatListItemNote(date)}</span>

      <p className={styles.description}>
        {description.length < 1
          ? 'Ще немає тексту'
          : shorterText(description, DESCRIPTION_PRIVIEW_LENGTH)}
      </p>
    </div>
  );
}

export default ListItem;
