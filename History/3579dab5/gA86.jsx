import { CatsProvider } from './context/CatsContext';
import { PageProvider } from './context/PageContext';
import GlobalStyles from './GlobalStyles';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <CatsProvider>
        <PageProvider>
          <AppLayout />
        </PageProvider>
      </CatsProvider>
    </>
  );
}

export default App;
