import { PageProvider } from "./context/PageContext";
import GlobalStyles from "./GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <PageProvider>
        <AppLayout />
      </PageProvider>
    </>
  );
}

export default App;
