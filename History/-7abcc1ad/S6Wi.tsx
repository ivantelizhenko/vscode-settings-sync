import Header from './ui/Header';
import Fields from './ui/Fields';
import AppLayout from './ui/AppLayout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AppLayout>
      <Header />
      <Fields />
      <Toaster />
    </AppLayout>
  );
}

export default App;
