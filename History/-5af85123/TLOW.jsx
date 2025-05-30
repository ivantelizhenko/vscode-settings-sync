import { useEffect, useState } from "react";

function App() {
  const [x, setX] = useState(2);

  useEffect(() => {
    console.log(x);

    setX((xEm) => xEm + 1);
  }, []);

  return <div></div>;
}

export default App;
