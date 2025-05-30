import { useEffect, useState } from "react";

function App() {
  const x = 0;

  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(num);
  }, []);

  const g = () => {
    const [pause, setPause] = useState(false);
  };

  return <div>Hey</div>;
}

export default App;
