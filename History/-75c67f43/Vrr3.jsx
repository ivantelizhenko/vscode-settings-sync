import { createContext, useContext, useEffect, useReducer } from 'react';
import { useLocalStorageState } from '../Hooks/useLocalStorageState';

const NotesContext = createContext();

const initialState = {
  notes: [],
  filteredNotes: [],
  selectedNoteId: '',
  isOpenModal: false,
  isLoading: false,
  searchValue: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoding: true };

    case 'notes/loaded':
      return {
        ...state,
        isLoading: false,
        notes: action.payload,
      };

    case 'note/add':
      return {
        ...state,
        notes: [...state.notes, action.payload],
        selectedNoteId: action.payload.id,
      };

    case 'note/deleteResolve':
      return {
        ...state,
        notes: [
          ...state.notes.filter(note => note.id !== state.selectedNoteId),
        ],
        selectedNoteId: '',
        isOpenModal: false,
      };
    case 'note/deleteReject':
      return {
        ...state,
        isOpenModal: false,
      };

    case 'note/selectId':
      return { ...state, selectedNoteId: action.payload };

    case 'modal/toggle':
      return { ...state, isOpenModal: !state.isOpenModal };

    case 'search/set':
      return {
        ...state,
        searchValue: action.payload,
      };

    case 'search/filterNotes':
      return {
        ...state,
        filteredNotes: [
          ...state.notes.filter(
            note =>
              note.title
                .toLowerCase()
                .includes(state.searchValue.toLowerCase()) ||
              note.description
                .toLowerCase()
                .includes(state.searchValue.toLowerCase())
          ),
        ],
      };

    default:
      throw new Error('Unknown action type');
  }
}

function NotesProvider({ children }) {
  const [
    {
      notes,
      filteredNotes,
      searchValue,
      selectedNoteId,
      isOpenModal,
      isLoading,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [notesDB, setNotesDB] = useLocalStorageState([], 'notes');

  useEffect(() => {
    dispatch({ type: 'notes/loaded', payload: notesDB });
    dispatch({ type: 'search/filterNotes' });
  }, [notesDB]);

  useEffect(() => {
    setNotesDB(notes);
  }, [notes, setNotesDB]);

  // Note functions
  function onAddNote() {
    const createId = 'id' + Date.now() + Math.random().toString(16).slice(2);
    const currentDate = new Date();

    const newNote = {
      id: createId,
      title: '',
      description: '',
      date: currentDate,
    };

    dispatch({ type: 'note/add', payload: newNote });
  }

  function onEditNote(id, newTitle, newDescription) {
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

    dispatch({ type: 'note/deleteResolve', payload: id });
    dispatch({ type: 'note/add', payload: editedNote });
  }

  function onDeleteNoteResolve() {
    dispatch({ type: 'note/deleteResolve' });
  }

  function onDeleteNoteReject() {
    dispatch({ type: 'note/deleteReject' });
  }

  //////////////////////////////////////////
  // Selected note functions
  function setSelectedNoteId(id) {
    dispatch({ type: 'note/selectId', payload: id });
  }

  //////////////////////////////////////////
  // Modal functions
  function onToggleModal() {
    dispatch({ type: 'modal/toggle' });
  }

  //////////////////////////////////////////
  // Search functions
  function setSearchedValue(text) {
    dispatch({ type: 'search/set', payload: text });
  }

  useEffect(() => {
    dispatch({ type: 'search/filterNotes' });
  }, [searchValue, notes]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        filteredNotes,
        searchValue,
        selectedNoteId,
        isLoading,
        isOpenModal,
        onToggleModal,
        setSelectedNoteId,
        setSearchedValue,
        onDeleteNoteResolve,
        onDeleteNoteReject,
        onAddNote,
        onEditNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

const useNotes = function useNotes() {
  const context = useContext(NotesContext);

  if (context === undefined)
    throw new Error('Context was used outside of NotesProvider');
  return context;
};

export { useNotes, NotesProvider };
