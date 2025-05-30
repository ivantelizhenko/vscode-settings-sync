import { createContext, useContext, useState } from 'react';

const SelectedNoteContext = createContext();

function SelectedNoteProvider({ children }) {
  const [selectedNote, setSelectedNote] = useState('');
  console.log(selectedNote);
  return (
    <SelectedNoteContext.Provider value={{ selectedNote, setSelectedNote }}>
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
