import { createContext, useContext, useState } from 'react';

const SelectedNoteContext = createContext();

function SelectedNoteProvider({ children }) {
  const [selectedNote, useSelectedNote] = useState('');

  return (
    <SelectedNoteProvider.Provider value={{ selectedNote, useSelectedNote }}>
      {children}
    </SelectedNoteProvider.Provider>
  );
}

function useSelectedNote() {
  const context = useContext(SelectedNoteContext);

  return context;
}

export { useSelectedNote, SelectedNoteProvider };
