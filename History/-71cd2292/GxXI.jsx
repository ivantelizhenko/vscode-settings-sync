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

  function replaceText(text) {
    const formatValue = `/${searchValue}/i`;
    console.log(text);
    return text.replace(/fox/, '<span>fox</span>');
  }

  const chooseTitle = searchValue ? replaceText(title) : title;
  const chooseDescription = searchValue
    ? replaceText(description)
    : description;

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
        {chooseTitle.length < 1
          ? 'Нова нотатка'
          : replaceText(
              chooseTitle.slice(0, TITLE_PRIVIEW_LENGTH) +
                `${chooseTitle.length > TITLE_PRIVIEW_LENGTH ? '...' : ''} `
            )}
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
