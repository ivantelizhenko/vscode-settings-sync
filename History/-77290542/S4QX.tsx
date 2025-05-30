import Button from './components/Button';
import Container from './components/Container';

function App() {
  return (
    <main>
      <Container as={typeof (<Button el="button" />)} />
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
