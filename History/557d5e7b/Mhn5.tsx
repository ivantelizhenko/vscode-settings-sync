import { get } from "./utils/http";

function App() {
  get(`https://jsonplaceholder.typicode.com/posts`);

  return <h1>Data Fetching!</h1>;
}

export default App;
