import { CarProvider } from './context/CardsContext';
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
