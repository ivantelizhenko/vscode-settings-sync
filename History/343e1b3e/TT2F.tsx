import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import AppLayout from './ui/AppLayout';
import EditUsers from './features/editUser/EditUsers';
import PageNotFound from './ui/PageNotFound';
import Users from './features/users/Users';
import { ModalProvider } from './contexts/modalContext/ModalContext';
import { FiltersProvider } from './contexts/filtersContext/FiltersContext';
import { AppProvider } from './contexts/appContext/AppContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <ModalProvider>
          <FiltersProvider>
            <AppProvider>
              <Route index element={<Navigate replace to="app" />} />

              <Route path="app" element={<AppLayout />}>
                <Route index element={<Navigate replace to="users" />} />

                <Route path="users" element={<Users />} />
                <Route path="edit" element={<EditUsers />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </AppProvider>
          </FiltersProvider>
        </ModalProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
