import Button from './components/Button';

function App() {
  return (
    <main>
      <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="#">
          A Link
        </Button>
      </p>
    </main>
  );
}

export default App;
