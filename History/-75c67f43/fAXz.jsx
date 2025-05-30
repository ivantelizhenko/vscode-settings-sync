import { createContext, useContext, useEffect, useReducer } from 'react';
import { useLocalStorageState } from '../Hooks/useLocalStorageState';

const NotesContext = createContext();

const initialState = {
  notes: [],
  selectedNoteId: '',
  openModal: false,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoding: true };

    case 'notes/loaded':
      // action.payload === notes from DB
      return {
        ...state,
        isLoading: false,
        notes: action.payload,
      };

    case 'note/add':
      // action.payload === new note
      return {
        ...state,
        notes: [...state.notes, action.payload],
        selectedNoteId: action.payload.id,
      };

    case 'note/deleteResolve':
      // action.payload === deleted note id
      return {
        ...state,
        notes: [
          ...state.notes.filter(note => note.id !== state.selectedNoteId),
        ],
        selectedNoteId: '',
        openModal: false,
      };
    case 'note/deleteReject':
      // action.payload === deleted note id
      return {
        ...state,
        openModal: false,
      };

    case 'note/selectId':
      // action.payload === selected note id
      return { ...state, selectedNoteId: action.payload };

    case 'modal/toggle':
      return { ...state, openModal: !state.openModal };

    default:
      throw new Error('Unknown action type');
  }
}

function NotesProvider({ children }) {
  const [{ notes, selectedNoteId, openModal, isLoading }, dispatch] =
    useReducer(reducer, initialState);

  const [notesLS, setNotesLS] = useLocalStorageState([], 'notes');

  useEffect(() => {
    dispatch({ type: 'notes/loaded', payload: notesLS });
  }, []);

  useEffect(() => {
    setNotesLS(notes);
  }, [notes]);

  function deleteNoteResolve() {
    dispatch({ type: 'note/deleteResolve' });
  }

  function deleteNoteReject() {
    dispatch({ type: 'note/deleteReject' });
  }

  function setSelectedNoteId(id) {
    dispatch({ type: 'note/selectId', payload: id });
  }

  function onToggleModal() {
    dispatch({ type: 'modal/toggle' });
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

    dispatch({ type: 'note/add', payload: newNote });
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

    dispatch({ type: 'note/deleteResolve', payload: id });
    dispatch({ type: 'note/add', payload: editedNote });
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        isLoading,
        openModal,
        onToggleModal,
        selectedNoteId,
        setSelectedNoteId,
        deleteNoteResolve,
        deleteNoteReject,
        addNote,
        editNote,
      }}
    >
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
