import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const x = 0;
  useEffect(() => {
    console.log(num);
  }, []);

  const h = () => {
    const [m, s] = useState();
  };

  return <div>Hey</div>;
}

export default App;
