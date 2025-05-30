import { useEffect, useState } from "react";
import { get } from "./utils/http";
import { BlogPost } from "./components/BlogPosts";

function App() {
  const [fetchingPosts, setFetchingPosts] = useState<BlogPost[]>();

  useEffect(() => {
    const posts = await get(`https://jsonplaceholder.typicode.com/posts`);

    setFetchingPosts(posts);
  }, []);

  return <h1>Data Fetching!</h1>;
}

export default App;
