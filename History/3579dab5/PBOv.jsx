import { useEffect } from "react";
import { getData } from "./getBrawlers";

function App() {
  getData();
  // useEffect(() => {
  //   getData();
  // }, []);

  return <div>Hello slider</div>;
}

export default App;
