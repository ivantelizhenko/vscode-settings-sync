import AppLayout from './Components/AppLayout';
import { NotesProvider } from './Contexts/NotesContext';

function App() {
  const x = 0;

  return (
    <NotesProvider>
      <AppLayout />
    </NotesProvider>
  );
}

export default App;
