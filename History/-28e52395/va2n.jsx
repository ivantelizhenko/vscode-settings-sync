import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/1" element={<div>Page2</div>} />
          <Route path="/2" element={<div>Page3</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
