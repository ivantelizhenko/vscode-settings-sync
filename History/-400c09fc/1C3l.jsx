import { useState } from 'react';

function Timer() {
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(true);

  return (
    <div
      className={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <span>{num}</span>
      <button style={}>{pause ? 'Start' : 'Pause'}</button>
    </div>
  );
}

export default Timer;
