import AppLayout from './Components/AppLayout';
import { NotesProvider } from './Contexts/NotesContext';
import { SelectedNoteIdProvider } from './Contexts/SelectedNoteIdContext';

function App() {
  return (
    <SelectedNoteIdProvider>
      <NotesProvider>
        <AppLayout />
      </NotesProvider>
    </SelectedNoteIdProvider>
  );
}

export default App;
