import Input from './components/Input';
import Form from './components/Form';
import Button from './components/Button';
import { useRef } from 'react';

function App() {
  const customeRef = useRef(null);

  function handleSave(data: unknown) {
    curData.current = data as { name: string; age: number };
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customeRef}>
        <Input label="Name" id="name" type="text" />
        <Input label="Age" id="age" type="number" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
