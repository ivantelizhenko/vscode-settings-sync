import AppLayout from './Components/AppLayout';
import { NotesProvider } from './Contexts/NotesContext';

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
