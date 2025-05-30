import { CardProvider } from './context/CardContext';
import { PageProvider } from './context/PageContext';
import GlobalStyles from './GlobalStyles';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <CardProvider>
        <PageProvider>
          <AppLayout />
        </PageProvider>
      </CardProvider>
    </>
  );
}

export default App;
