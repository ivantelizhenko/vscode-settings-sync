import styled from 'styled-components';

import Footer from './components/Footer';
import Main from './components/Main';
import { Toaster } from 'react-hot-toast';
import { BooksProvider } from './store/BookContext';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <BooksProvider>
      <Layout>
        <Main />
        <Footer />
        <Toaster />
      </Layout>
    </BooksProvider>
  );
}

export default App;
