import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const x = 0;
  useEffect(() => {
    console.log(num);
  }, []);

  function test() {
    const [h, seth] = useState();
  }

  return <div>Hey</div>;
}

export default App;
