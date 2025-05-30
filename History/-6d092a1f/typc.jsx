import { useEffect, useState } from 'react';
import Empty from './Empty';
import styles from './Form.module.css';
import { useSelectedNote } from '../Contexts/SelectedNoteContext';
import { useNotes } from '../Contexts/NotesContext';
import { formatOpenNote } from '../Utils/helpers';

function Form() {
  const { notes, editNote } = useNotes();
  const { selectedNote } = useSelectedNote();

  const currentNote = notes.find(note => note.id === selectedNote);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(currentNote.title);
    setDescription(currentNote.description);
  }, [selectedNote]);

  useEffect(() => {
    if (selectedNote) editNote(selectedNote, title, description);
  }, [title, description]);

  if (!selectedNote?.length) return <Empty message="Вибери нотаток😉" />;

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
