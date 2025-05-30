import { useRef } from 'react';
import Input from './components/Input';
import Form from './components/Form';

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Form>
        <Input label="Test" id="test" ref={input} />
      </Form>
    </main>
  );
}

export default App;
