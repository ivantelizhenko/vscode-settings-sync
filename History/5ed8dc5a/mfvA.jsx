import { createContext, useContext, useState } from 'react';

const SelectedNoteIdContext = createContext();

function SelectedNoteIdProvider({ children }) {
  const [selectedNoteId, setSelectedNoteId] = useState('');

  return (
    <SelectedNoteContext.Provider value={{ selectedNoteId, setSelectedNoteId }}>
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

export { useSelectedNoteId, SelectedNoteIdProvider };
