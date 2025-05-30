import AppLayout from './Components/AppLayout';
import NotesProvider from './Contexts/NotesContext';

function App() {
  return (
    <NotesProvider>
      <AppLayout />
    </NotesProvider>
  );
}

export default App;
d;
