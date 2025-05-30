import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { useNotes } from '../Contexts/NotesContext';
import { formatOpenNote } from '../Utils/helpers';

function Form() {
  const { notes, editNote, selectedNoteId } = useNotes();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  console.log(selectedNoteId);

  const currentNote = notes.find(note => note.id === selectedNoteId);

  useEffect(() => {
    setTitle(currentNote.title);
    setDescription(currentNote.description);
  }, [selectedNoteId]);

  useEffect(() => {
    if (selectedNoteId) editNote(selectedNoteId, title, description);
  }, [title, description]);

  return (
    <form className={styles.container}>
      <div className={styles.data}>{formatOpenNote(currentNote.date)}</div>
      <input
        maxLength="100"
        className={`${styles.box} ${styles.title}   `}
        placeholder="Заголовок"
        type="text"
        value={currentNote.title || ''}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className={`${styles.box} ${styles.description} `}
        placeholder="Текст"
        type="text"
        value={currentNote.description || ''}
        onChange={e => setDescription(e.target.value)}
      />
    </form>
  );
}

export default Form;
