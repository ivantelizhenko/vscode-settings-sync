import Input from './components/Input';
import Form from './components/Form';
import Button from './components/Button';
import { useEffect, useRef } from 'react';

function App() {
  const curData = useRef<unknown>(null);

  function handleSave(data: unknown) {
    curData.current = data;
    console.log(curData.current);
  }

  return (
    <main>
      <Form onSave={handleSave}>
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
