import { CardsProvider } from './context/CardsContext';
import { PageProvider } from './context/PageContext';
import GlobalStyles from './GlobalStyles';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <CardsProvider>
        <PageProvider>
          <AppLayout />
        </PageProvider>
      </CardsProvider>
    </>
  );
}

export default App;
