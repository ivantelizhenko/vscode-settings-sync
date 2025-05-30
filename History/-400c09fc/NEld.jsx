import { useState } from 'react';

function Timer() {
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(true);

  return (
    <div>
      <span>{num}</span>
      <button>{pause ? 'Start' : 'Pause'}</button>
    </div>
  );
}

export default Timer;
