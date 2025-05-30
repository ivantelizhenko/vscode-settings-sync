import { useEffect } from "react";
import { getData } from "./getBrawlers";

function App() {
  useEffect(() => {
    getData();
  }, []);

  return <div>Hello slider</div>;
}

export default App;
