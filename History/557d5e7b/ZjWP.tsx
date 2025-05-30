import { useEffect, useState } from "react";
import { get } from "./utils/http";
import { BlogPost } from "./components/BlogPosts";

function App() {
  const [fetchingPosts, setFetchingPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function getPost() {
      const posts = await get(`https://jsonplaceholder.typicode.com/posts`);

      setFetchingPosts(posts as BlogPost[]);
    }
    getPost();
  }, []);

  console.log(fetchingPosts);

  return <h1>Data Fetching!</h1>;
}

export default App;
