import { createContext, useContext, useState } from 'react';
import { useLocalStorageState } from '../Hooks/useLocalStorageState';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

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

  if (context === undefined)
    throw new Error('Context was used outside of SelectedNoteProvider');

  return context;
}

export { useSelectedNote, SelectedNoteProvider };
