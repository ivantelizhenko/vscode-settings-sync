import styled from 'styled-components';
import ChessEnviroment from '../features/chess/components/enviroment/ChessEnviroment';
import Menu from '../features/menu/components/Menu';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import '../features/service/supabaseService';
import AppEnviroment from './AppEnviroment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppEnviroment />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/chess/:id" element={<ChessEnviroment />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/menu" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
