import { useEffect } from "react";
import { getBrawlers } from "./getBrawlers";

function App() {
  useEffect(() => {
    async function forbiden() {
      const x = await getBrawlers();
      console.log(x);
    }
  });
  getBrawlers();
  return <div>Hello slider</div>;
}

export default App;
