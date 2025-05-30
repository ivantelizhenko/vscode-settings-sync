import { createContext, useContext, useState } from 'react';

const SelectedNoteIdContext = createContext();

function SelectedNoteIdProvider({ children }) {
  const [selectedNoteId, setSelectedNoteId] = useState('');

  return (
    <SelectedNoteIdContext.Provider
      value={{ selectedNoteId, setSelectedNoteId }}
    >
      {children}
    </SelectedNoteIdContext.Provider>
  );
}

function useSelectedNoteId() {
  const context = useContext(SelectedNoteIdContext);

  if (context === undefined)
    throw new Error('Context was used outside of SelectedNoteIdProvider');
  return context;
}

export { useSelectedNoteId, SelectedNoteIdProvider };
