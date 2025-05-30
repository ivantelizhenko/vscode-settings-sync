import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { useNotes } from '../Contexts/NotesContext';
import { formatOpenNote } from '../Utils/helpers';

function Form() {
  const { notes, onEditNote, selectedNoteId } = useNotes();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const currentNote = notes.find(note => note.id === selectedNoteId);

  useEffect(() => {
    setTitle(currentNote.title);
    setDescription(currentNote.description);
  }, [selectedNoteId]);

  function handleEditNote(e) {
    if (!selectedNoteId) return;
    onEditNote(
      selectedNoteId,
      e.target.id === 'title' ? e.target.value : currentNote.title,
      e.target.id === 'description' ? e.target.value : currentNote.description
    );
  }

  // useEffect(() => {
  //   if (selectedNoteId) onEditNote(selectedNoteId, title, description);
  // }, [title, description]);

  return (
    <form className={styles.container} onChange={handleEditNote}>
      <div className={styles.data}>{formatOpenNote(currentNote.date)}</div>
      <input
        id="title"
        maxLength="100"
        className={`${styles.box} ${styles.title}   `}
        placeholder="Заголовок"
        type="text"
        value={currentNote.title || ''}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        id="description"
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
