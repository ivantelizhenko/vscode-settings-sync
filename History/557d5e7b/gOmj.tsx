import { useEffect, useState } from "react";
import { get } from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";

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
      console.log(data);
      const posts: BlogPost[] = data.map(({ id, title, body }) => ({
        id,
        title,
        text: body,
      }));

      setFetchingPosts(posts);
    }
    getPost();
  }, []);

  return (
    <main>
      <img src={fetchingImg} alt="pet-project image" />

      {fetchingPosts && <BlogPosts posts={fetchingPosts} />}
    </main>
  );
}

export default App;
