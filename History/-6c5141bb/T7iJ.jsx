import { useEffect, useState } from 'react';

function App() {
  const [x, setX] = useState();
  const y = 2;
  useEffect(() => {
    setX(x + 1);
  }, []);

  return <div></div>;
}

export default App;
