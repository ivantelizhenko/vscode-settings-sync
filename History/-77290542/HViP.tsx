import Button from './components/Button';
import { App1, App2 } from './components/Container';

function App() {
  return (
    <main>
      {/* <Container as="h1" /> */}
      <App1 />
      <App2 />
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
