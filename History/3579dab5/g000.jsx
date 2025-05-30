import { useEffect } from "react";
import { getBrawlers } from "./getBrawlers";

function App() {
  useEffect(()=>{
    async function try (){await getBrawlers();}
  })
  getBrawlers();
  return <div>Hello slider</div>;
}

export default App;
