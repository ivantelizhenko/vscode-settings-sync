import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<div></div>} />
          <Route path="/1" element={<div></div>} />
          <Route path="/2" element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
