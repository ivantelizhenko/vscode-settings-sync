import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="account" element={<Account />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
