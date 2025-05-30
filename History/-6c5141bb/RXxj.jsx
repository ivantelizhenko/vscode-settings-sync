import AppLayout from './Components/AppLayout';
import { NotesProvider } from './Contexts/NotesContext';
import { SelectedNoteProvider } from './Contexts/SelectedNoteContext';

function App() {
  return (
    <SelectedNoteProvider>
      <NotesProvider>
        <AppLayout />
      </NotesProvider>
    </SelectedNoteProvider>
  );
}

export default App;
