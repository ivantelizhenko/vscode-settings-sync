import styles from './Form.module.css';
import { useNotes } from '../Contexts/NotesContext';
import { formatOpenNote } from '../Utils/helpers';

function Form() {
  const { notes, onEditNote, selectedNoteId } = useNotes();

  const currentNote = notes.find(note => note.id === selectedNoteId);

  function handleChange(e) {
    if (!selectedNoteId) return;
    onEditNote(
      selectedNoteId,
      e.target.id === 'title' ? e.target.value : currentNote.title,
      e.target.id === 'description' ? e.target.value : currentNote.description
    );
  }

  return (
    <form className={styles.container} onChange={handleChange}>
      <div className={styles.data}>{formatOpenNote(currentNote.date)}</div>
      <input
        id="title"
        maxLength="100"
        className={`${styles.box} ${styles.title}   `}
        placeholder="Заголовок"
        type="text"
      />
      <textarea
        id="description"
        className={`${styles.box} ${styles.description} `}
        placeholder="Текст"
        type="text"
      />
    </form>
  );
}

export default Form;
