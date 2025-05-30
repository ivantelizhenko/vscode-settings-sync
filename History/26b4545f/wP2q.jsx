import { getData } from "./getData";

function TestComponent() {
  function handleClick() {
    getData();
  }

  return <button onClick={handleClick}>Click</button>;
}

export default TestComponent;
