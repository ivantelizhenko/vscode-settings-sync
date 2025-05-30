import Input from './components/Input';

function App() {
  return (
    <main>
      <Input
        id="name"
        label="Your name"
        type="text"
        disabled
        placeholder="test"
      />
      <Input id="age" label="Your age" />
    </main>
  );
}

export default App;
