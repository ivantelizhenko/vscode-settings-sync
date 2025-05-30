import { useEffect, useState } from 'react';
import Empty from './Empty';
import styles from './Form.module.css';
import { useSelectedNoteId } from '../Contexts/SelectedNoteIdContext';
import { useNotes } from '../Contexts/NotesContext';
import { formatOpenNote } from '../Utils/helpers';

function Form() {
  const { notes, editNote } = useNotes();
  const { selectedNoteId } = useSelectedNoteId();

  const currentNote = notes.find(note => note.id === selectedNoteId);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(currentNote.title);
    setDescription(currentNote.description);
  }, []);

  useEffect(() => {
    if (selectedNoteId) editNote(selectedNoteId, title, description);
  }, [title, description]);

  if (!selectedNoteId?.length) return <Empty message="Вибери нотаток😉" />;

  return (
    <form className={styles.container}>
      <div className={styles.data}>{formatOpenNote(currentNote.date)}</div>
      <input
        maxLength="100"
        className={`${styles.box} ${styles.title}   `}
        placeholder="Заголовок"
        type="text"
        value={currentNote?.title || ''}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className={`${styles.box} ${styles.description} `}
        placeholder="Текст"
        type="text"
        value={currentNote?.description || ''}
        onChange={e => setDescription(e.target.value)}
      />
    </form>
  );
}

export default Form;
