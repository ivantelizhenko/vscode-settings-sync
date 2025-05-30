import { createContext, useContext } from 'react';
import { useLocalStorageState } from '../Hooks/useLocalStorageState';
import { format } from 'date-fns';
import { useSelectedNoteId } from './SelectedNoteIdContext';

const NotesContext = createContext();

function NotesProvider({ children }) {
  const [notes, setNotes] = useLocalStorageState([], 'notes');
  const { setSelectedNoteId } = useSelectedNoteId();

  function deleteNote(id) {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    setSelectedNoteId('');
  }

  function addNote() {
    const createId = 'id' + Date.now() + Math.random().toString(16).slice(2);
    const currentDate = new Date().toISOString();
    const newNote = {
      id: createId,
      title: '',
      description: '',
      date: currentDate,
    };

    setSelectedNoteId(createId);
    setNotes([newNote, ...notes]);
  }

  function editNote(id, newTitle, newDescription) {
    const currentNote = notes.find(note => note.id === id);
    if (
      currentNote.title === newTitle &&
      currentNote.description === newDescription
    )
      return;

    const editedNote = {
      id: id,
      title: newTitle,
      description: newDescription,
      date: currentNote.date,
    };
    const notEditedNotes = notes.filter(note => note.id !== id);
    const sortByTimeNotes = [editedNote, ...notEditedNotes].sort((a, b) =>
      a.date < b.date ? 1 : -1
    );
    setNotes(sortByTimeNotes);
  }

  return (
    <NotesContext.Provider value={{ notes, deleteNote, addNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
}

function useNotes() {
  const context = useContext(NotesContext);

  if (context === undefined)
    throw new Error('Context was used outside of NotesProvider');
  return context;
}

// export { useNotes, NotesProvider };
