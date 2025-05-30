import { useRef } from 'react';
import Input from './components/Input';
import Form from './components/Form';

function App() {
  return (
    <main>
      <Form>
        <Input label="Name" id="name" type="text" />
      </Form>
    </main>
  );
}

export default App;
