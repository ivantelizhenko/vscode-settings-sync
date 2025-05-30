import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import { NotesProvider } from './Contexts/NotesContext';
import AllRecipes from './Pages/AllRecipes';
import CurRecipe from './Pages/CurRecipe';
import Cart from './Pages/Cart';

function App() {
  return (
    <NotesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<div></div>} />
            <Route path="/" element={<div></div>} />
            <Route path="/" element={<div></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
