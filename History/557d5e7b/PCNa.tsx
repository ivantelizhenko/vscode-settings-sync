import { useEffect } from "react";
import { get } from "./utils/http";
import { BlogPost } from "./components/BlogPosts";

function App() {
  const [fetchingPosts, setFetchingPosts] = useState<BlogPost[]>();

  useEffect(() => {
    get(`https://jsonplaceholder.typicode.com/posts`);
  }, []);

  return <h1>Data Fetching!</h1>;
}

export default App;
