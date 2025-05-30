import { createContext, useContext, useState } from 'react';
import { useLocalStorageState } from '../Hooks/useLocalStorageState';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

const NotesContext = createContext();

function NotesProvider({ children }) {
  const [selectedNote, useSelectedNote] = useState('');

  function deleteNote({ id }) {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
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

export { useNotes, NotesProvider };
