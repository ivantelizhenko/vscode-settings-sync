import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Users from './components/features/users/Users';
import AppLayout from './ui/AppLayout';
import EditUsers from './features/editUser/EditUsers';
import PageNotFound from './ui/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="app" />} />

        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="users" />} />

          <Route path="users" element={<Users />} />
          <Route path="edit/:userId" element={<EditUsers />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
