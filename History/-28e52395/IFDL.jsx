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
            <Route path="/" element={<AllRecipes />} />
            <Route path="/recipe" element={<CurRecipe />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
