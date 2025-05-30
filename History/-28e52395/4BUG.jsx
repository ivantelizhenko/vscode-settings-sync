import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Footer from './pages/Footer';
import List from './pages/List';
import Box from './pages/Box';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/list" element={<List />} />
          <Route path="/box" element={<Box />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
