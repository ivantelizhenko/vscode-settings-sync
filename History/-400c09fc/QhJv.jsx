import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(false);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <span>{num}</span>
      <button onClick={handleFunction}>{pause ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default Timer;
