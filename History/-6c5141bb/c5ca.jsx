import AppLayout from './Components/AppLayout';
import { ConfirmDeleteProvider } from './Contexts/ConfirmDeleteContext';
import { NotesProvider } from './Contexts/NotesContext';
import { SelectedNoteIdProvider } from './Contexts/SelectedNoteIdContext';

function App() {
  return (
    <SelectedNoteIdProvider>
      <ConfirmDeleteProvider>
        <NotesProvider>
          <AppLayout />
        </NotesProvider>
      </ConfirmDeleteProvider>
    </SelectedNoteIdProvider>
  );
}

export default App;
