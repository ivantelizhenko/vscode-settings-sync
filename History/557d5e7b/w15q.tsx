import { useEffect } from "react";
import { get } from "./utils/http";

function App() {
  const [fetchingState];

  useEffect(() => {
    get(`https://jsonplaceholder.typicode.com/posts`);
  }, []);

  return <h1>Data Fetching!</h1>;
}

export default App;
