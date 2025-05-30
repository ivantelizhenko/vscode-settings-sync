import { useEffect, useState } from "react";

function App() {
  const x = 0;

  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(num);
  }, []);

  return <div>Hey</div>;
}

export default App;
