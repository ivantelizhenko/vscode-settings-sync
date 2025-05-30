import { createContext, useContext, useState } from 'react';

const SelectedNoteContext = createContext();

function SelectedNoteProvider({ children }) {
  const [selectedNote, useSelectedNote] = useState('');

  return (
    <SelectedNoteContext.Provider value={{ selectedNote, useSelectedNote }}>
      {children}
    </SelectedNoteContext.Provider>
  );
}

function useSelectedNote() {
  const context = useContext(SelectedNoteContext);

  if (context === undefined)
    throw new Error('Context was used outside of NotesProvider');
  return context;
}

export { useSelectedNote, SelectedNoteProvider };
