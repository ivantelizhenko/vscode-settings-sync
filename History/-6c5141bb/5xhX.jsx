import { useEffect } from 'react';

function App() {
  const x = 2;

  useEffect(() => {
    console.log(x);
  }, []);

  return <div></div>;
}

export default App;
