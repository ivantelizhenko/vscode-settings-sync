import { useState } from 'react';

function Timer() {
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(false);

  return (
    <div>
      <span>{num}</span>
      <button></button>
    </div>
  );
}

export default Timer;
