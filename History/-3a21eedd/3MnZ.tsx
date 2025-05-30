import { useEffect, useState } from "react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

function App() {
  const [num, setNum] = useState(0);
  const x = 0;

  useEffect(() => {
    console.log(reactHooks);
    console.log(reactRefresh);
  }, []);

  return <div>Hey</div>;
}

export default App;
