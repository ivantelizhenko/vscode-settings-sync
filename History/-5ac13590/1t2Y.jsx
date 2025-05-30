import { useEffect } from "react";

function App() {
  const [num, setNum] = useState(0);
  const x = 0;

  useEffect(() => {
    console.log(num);
  }, []);

  return <div>Hey</div>;
}

export default App;
