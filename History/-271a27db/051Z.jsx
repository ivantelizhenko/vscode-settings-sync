import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Dashboard from '';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
