import { useEffect, useState } from 'react';

function App() {
  const [x, setX] = useState();

  useEffect(() => {
    setX(x + 1);
  }, []);

  return <div></div>;
}

export default App;
