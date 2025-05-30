import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(false);

  const intervalRef = useRef();

  function handleClick() {
    if (pause) {
      intervalRef.current = setInterval(() => {
        setNum(prev => prev--), 1000;
      });
    } else {
      clearInterval(intervalRef.current);
    }
    setPause(curr => !curr);
  }
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <span>{num}</span>
      <button onClick={handleClick}>{pause ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default Timer;
