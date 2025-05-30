import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import PageNotFound from '../pages/PageNotFound';
import Navigation from '../pages/Page';
import { useTabs } from '../store/TabsContext';

function App() {
  const { tabs } = useTabs();

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/app" />} />
        <Route path="/app" element={<Navigation />}>
          {tabs.map(tab =>   <Route path={`/app/${tab.title}`} element={<Page />}}>}
        
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
