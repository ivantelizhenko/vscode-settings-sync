import { createContext, useContext, useState } from 'react';

const ConfirmDeleteContext = createContext();

function ConfirmDeleteProvider({ children }) {
  const [confirmDelete, setConfirmDelete] = useState('');

  return (
    <ConfirmDeleteContext.Provider value={{ confirmDelete, setConfirmDelete }}>
      {children}
    </ConfirmDeleteContext.Provider>
  );
}

function useConfirmDelete() {
  const context = useContext(ConfirmDeleteContext);

  if (context === undefined)
    throw new Error('Context was used outside of SelectedNoteIdProvider');
  return context;
}

export { useSelectedNoteId, SelectedNoteIdProvider };
