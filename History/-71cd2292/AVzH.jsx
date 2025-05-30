import styles from './ListItem.module.css';
import { formatListItemNote } from '../Utils/helpers';
import {
  TITLE_PRIVIEW_LENGTH,
  DESCRIPTION_PRIVIEW_LENGTH,
} from '../Utils/constants';
import { useNotes } from '../Contexts/NotesContext';

function ListItem({ note }) {
  const { title, description, date, id } = note;
  const { selectedNoteId, setSelectedNoteId, searchValue } = useNotes();

  return (
    <div
      className={`${styles.container} ${
        selectedNoteId === id ? styles.containerActive : ''
      }`}
      onClick={() => {
        setSelectedNoteId(id);
      }}
    >
      {title.includes(searchValue) && searchValue !== '' ? (
        <div>hey</div>
      ) : (
        <h2 className={styles.title}>
          {title.length < 1
            ? 'Нова нотатка'
            : title.slice(0, TITLE_PRIVIEW_LENGTH) +
              `${title.length > TITLE_PRIVIEW_LENGTH ? '...' : ''} `}
        </h2>
      )}
      <span>{formatListItemNote(date)}</span>
      {description.includes(searchValue) && searchValue !== '' ? (
        <p className={styles.description}>
          ...{<span className={styles.highlight}>{searchValue}</span>}...
        </p>
      ) : (
        <p className={styles.description}>
          {description.length < 1
            ? 'Ще немає тексту'
            : description.slice(0, DESCRIPTION_PRIVIEW_LENGTH) +
              `${
                description.length > DESCRIPTION_PRIVIEW_LENGTH ? '...' : ''
              } `}
        </p>
      )}
    </div>
  );
}

export default ListItem;
