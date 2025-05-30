import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import PageNotFound from './pages/PageNotFound';
import Navigation from './pages/Navigation';
import { useTabs } from './store/TabsContext';
import Page from './pages/Page';
import { useEffect, useRef } from 'react';
import { saveToLocalStage } from './services/manageLocaleStorage';
import { TAB_LOCAL_STORAGE_KEY } from './utils/constants';

function App() {
  const { tabs } = useTabs();
  const isFirstRender = useRef(false);

  useEffect(() => {
    if (!isFirstRender.current) {
      console.log('i work');
      saveToLocalStage(TAB_LOCAL_STORAGE_KEY, tabs);
    }
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [tabs]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/app" />} />
        <Route path="/app" element={<Navigation />}>
          {tabs.map(tab => (
            <Route key={tab.id} path="/app/:userId" element={<Page />} />
          ))}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
