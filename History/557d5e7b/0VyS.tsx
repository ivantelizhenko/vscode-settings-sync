import { useEffect, useState } from "react";
import { get } from "./utils/http";
import { BlogPost } from "./components/BlogPosts";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchingPosts, setFetchingPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function getPost() {
      const data = (await get(
        `https://jsonplaceholder.typicode.com/posts`
      )) as RawDataBlogPost[];

      const posts: BlogPost[] = data.map(({ id, title, body }) => ({
        id,
        title,
        body,
      }));

      setFetchingPosts(posts);
    }
    getPost();
  }, []);

  console.log(fetchingPosts);

  return <h1>Data Fetching!</h1>;
}

export default App;
