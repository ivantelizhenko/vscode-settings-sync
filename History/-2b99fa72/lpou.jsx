import styles from './ListItem.module.css';
import { formatListItemNote } from '../Utils/helpers';
import { useSelectedNoteId } from '../Contexts/SelectedNoteIdContext';
import {
  TITLE_PRIVIEW_LENGTH,
  DESCRIPTION_PRIVIEW_LENGTH,
} from '../Utils/constants';

function ListItem({ note }) {
  const { title, description, date, id } = note;
  const { selectedNoteId, setSelectedNoteId } = useSelectedNoteId();

  return (
    <div
      className={`${styles.container} ${
        selectedNoteId === id ? styles.containerActive : ''
      }`}
      onClick={() => {
        setSelectedNoteId(id);
      }}
    >
      <h2 className={styles.title}>
        {title.length < 1
          ? 'Нова нотатка'
          : title.length > TITLE_PRIVIEW_LENGTH
          ? `${title.slice(0, TITLE_PRIVIEW_LENGTH)}...`
          : title}
      </h2>
      <span>{formatListItemNote(date)}</span>
      <p className={styles.description}>
        {description.length < 1
          ? 'Ще немає тексту'
          : description.length > DESCRIPTION_PRIVIEW_LENGTH
          ? `${description.slice(0, DESCRIPTION_PRIVIEW_LENGTH)}...`
          : description}
      </p>
    </div>
  );
}

export default ListItem;
