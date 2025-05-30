import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(false);

  const intervalRef = useRef();

  function setTimer() {
    intervalRef.current = setInterval(() => {
      setNum(prev => prev - 1);
    }, 1000);
  }

  useEffect(() => {
    setTimer();

    return clearInterval(intervalRef.current);
  }, [pause]);

  function handleFunction() {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      setTimer();
    }
    setPause(curr => !curr);
  }

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
