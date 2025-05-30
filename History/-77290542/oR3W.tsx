import { useRef } from 'react';
import Input from './components/Input';

function App() {
  const input = useRef(null);
  console.log(input.current);
  return (
    <main>
      <Input label="Test" id="test" ref={input} />
      {/* <Container as="h2">Hey</Container> */}
      {/* <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="#">
          A Link
        </Button>
      </p> */}
    </main>
  );
}

export default App;
