import { useEffect, useState } from "react";
import reactRefresh from "eslint-plugin-react-refresh";

function App() {
  const [num, setNum] = useState(0);
  const x = 0;

  useEffect(() => {
    console.log(reactRefresh);
  }, []);

  return <div>Hey</div>;
}

export default App;
